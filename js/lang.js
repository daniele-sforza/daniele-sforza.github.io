/*
  lang.js - the language switch shared by every page of danielesforza.dev.
  A classic script (not a module), loaded at the end of <body> before the kit's modules, so the saved
  language is in place before the hero's entrance runs. The page is written in its default language
  (Italian on every page but the privacy policy); each page passes a dictionary per language:

    initLang({ key: 'portfolio_lang', fallbackKeys: [], def: 'it', dict: { it: {...}, en: {...} } })

  Markup it reads:
    data-i18n="k"            the element's text is dict[lang][k]
    data-i18n-html="k"       the element's HTML is dict[lang][k] (only for trusted strings written in the page)
    data-i18n-attr="a:k;b:j" attributes from the dictionary (aria-label, content, alt, href ...)
    data-lang-src="img/x-{l}"  on <img> / <source> / svg <image>: the screenshot of that language (data-lang-srcset
                             the same for a srcset); data-langs="it,en"
                             lists the languages that have one, the first is used otherwise
    [data-set-lang="xx"]     the switch buttons (aria-pressed is kept in step)
  dict[lang]._title and ._desc set the <title> and the meta description.
  The choice is saved in localStorage under `key` (read with fallbackKeys too); without a saved one the
  browser's language is used when the page has it, else `def`.
*/
(function () {
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } return null; }

  window.initLang = function (opts) {
    var dict = opts.dict, def = opts.def || 'it';
    function apply(lang, save) {
      if (!dict[lang]) lang = def;
      var t = dict[lang];
      document.documentElement.lang = lang;
      if (t._title) document.title = t._title;
      var md = document.querySelector('meta[name="description"]');
      if (md && t._desc) md.setAttribute('content', t._desc);
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var v = t[el.getAttribute('data-i18n')];
        if (v == null) return;
        el.textContent = v;
        // a moment that split this heading into letters kept its words in aria-label
        if (el.hasAttribute('aria-label') && !el.hasAttribute('data-i18n-attr')) el.setAttribute('aria-label', v);
      });
      document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        var v = t[el.getAttribute('data-i18n-html')];
        if (v != null) el.innerHTML = v;
      });
      document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
        el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
          var p = pair.split(':'), a = (p[0] || '').trim(), k = (p[1] || '').trim();
          if (a && t[k] != null) el.setAttribute(a, t[k]);
        });
      });
      document.querySelectorAll('[data-lang-src]').forEach(function (el) {
        var langs = (el.getAttribute('data-langs') || lang).split(','), l = langs.indexOf(lang) > -1 ? lang : langs[0];
        var src = el.getAttribute('data-lang-src').replace('{l}', l);
        el.setAttribute(el.tagName === 'SOURCE' ? 'srcset' : el.tagName.toLowerCase() === 'image' ? 'href' : 'src', src);
      });
      document.querySelectorAll('[data-lang-srcset]').forEach(function (el) {
        var langs = (el.getAttribute('data-langs') || lang).split(','), l = langs.indexOf(lang) > -1 ? lang : langs[0];
        el.setAttribute('srcset', el.getAttribute('data-lang-srcset').split('{l}').join(l));
      });
      document.querySelectorAll('[data-set-lang]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang));
      });
      if (save) store(opts.key, lang);
      if (opts.onChange) opts.onChange(lang);
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
    }
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-set-lang'), true); });
    });
    var saved = store(opts.key);
    (opts.fallbackKeys || []).forEach(function (k) { if (!saved) saved = store(k); });
    var browser = (navigator.language || def).slice(0, 2).toLowerCase();
    var first = saved && dict[saved] ? saved : (dict[browser] ? browser : def);
    if (first !== document.documentElement.lang || saved) apply(first, !!saved);
    else document.querySelectorAll('[data-set-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === first)); });
    return { apply: apply };
  };

  // a "copy the address" button: <button data-copy="info@danielesforza.dev" data-copied="Copied">
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-copy]');
    if (!b) return;
    var text = b.getAttribute('data-copy'), label = b.querySelector('[data-copy-label]') || b;
    var done = function () {
      var was = label.textContent;
      label.textContent = b.getAttribute('data-copied') || 'Copied';
      setTimeout(function () { label.textContent = was; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () {});
  });
})();
