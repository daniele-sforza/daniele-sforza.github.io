---
name: danielesforza.dev
description: Portfolio of Daniele Sforza, developer of iOS and Android apps and websites, with the support pages of his app Calendario Turni.
colors:
  drafting-paper: "#EBE6DC"
  lifted-paper: "#F7F4EE"
  studio-ink: "#0D0C0B"
  ink-muted: "#64615c"
  hairline: "color-mix(in oklab, #0D0C0B 13%, transparent)"
  paper-shade: "color-mix(in oklab, #0D0C0B 9%, #EBE6DC)"
  studio-black: "#0B0A09"
  lamplight: "#EFE9DF"
  lamplight-muted: "color-mix(in oklab, #EFE9DF 56%, #0B0A09)"
  panel-hairline: "color-mix(in oklab, #EFE9DF 15%, transparent)"
  signal-lime: "#D7FF3F"
  ember: "#FF5A2E"
  ct-night: "#0e1513"
  ct-night-surface: "#1a2120"
  ct-mint: "#82d5c8"
  ct-mint-ink: "#003731"
  ct-teal: "#006a60"
  ct-mist: "#edf4f1"
typography:
  display:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(62px, 11.2vw, 168px)"
    fontWeight: 500
    lineHeight: 0.88
    letterSpacing: "-0.055em"
  statement:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.5vw, 52px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(32px, 4.2vw, 62px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  accent-italic:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.06em"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(19px, 1.6vw, 23px)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11.5px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "22px"
  xl: "30px"
  pill: "999px"
spacing:
  frame: "10px"
  frame-phone: "6px"
  gutter: "clamp(16px, 2.6vw, 40px)"
  page-margin: "80px"
  page-margin-phone: "24px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.studio-ink}"
    textColor: "{colors.lamplight}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 24px"
  button-primary-on-dark:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.studio-ink}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 24px"
  button-secondary:
    textColor: "{colors.studio-ink}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 24px"
  status-pill:
    textColor: "{colors.lamplight}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "34px"
    padding: "0 14px"
  project-card:
    backgroundColor: "{colors.lifted-paper}"
    textColor: "{colors.studio-ink}"
    rounded: "{rounded.lg}"
    padding: "10px 18px 10px 10px"
  studio-panel:
    backgroundColor: "{colors.studio-black}"
    textColor: "{colors.lamplight}"
    rounded: "{rounded.xl}"
  exhibit-tray:
    backgroundColor: "{colors.paper-shade}"
    rounded: "{rounded.xl}"
    padding: "{spacing.gutter}"
  section-label:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
---

# Design System: danielesforza.dev

## Overview

**Creative North Star: "The Night Studio"**

A developer's studio after hours. The page is drafting paper on a desk, faintly grained, and the work hangs on it in near-black panels like screens left on in a dark room. One colour is still awake: a lime signal that marks where you can act and what is live. Everything else is ink, paper and lamplight cream.

The system is tactile and crafted. Panels are objects with weight, set inside a thin paper frame (10px) so they read as slabs placed on the page rather than bands across it. Devices cast a long, soft float shadow; project cards lift when touched; grain sits on every surface. Type does the talking: the name set enormous and tight, one word per heading set in a hand-cut serif italic as a signature, small mono labels that number and classify the work like a studio's index cards.

The work itself leads. Every picture is a real screenshot of a real product, shown in its own device frame and in the visitor's language. The interface recedes around it: no decorative illustration, no stock imagery, no WebGL showpiece in the hero.

**Key Characteristics:**
- Drafting-paper ground with ink grain; Studio Black panels inset by a 10px paper frame.
- Signal Lime used only on dark, or as a small dot on ink.
- Giant tight Host Grotesk display; one Instrument Serif italic word per heading.
- JetBrains Mono uppercase labels that number and classify sections.
- Real product screenshots in device frames, never illustrations.
- Product subpages wear their own product's system, not this one.

## Colors

A near-monochrome studio palette, warm paper against near-black, with a single electric accent.

### Primary
- **Signal Lime** (#D7FF3F): the one light left on. The main action on dark panels (Scrivimi in the hero and footer), the status dot, the dot inside the ink button, the serif accent word on dark, the dot before a section label on dark. It never sets text on paper.

### Secondary
- **Ember** (#FF5A2E): part of the supplied system but reserved. Not used anywhere today; held back so lime stays the only accent until a real need appears.

### Neutral
- **Drafting Paper** (#EBE6DC): the page ground under everything, nav included.
- **Lifted Paper** (#F7F4EE): surfaces that sit on a dark panel (the project cards in the hero) and the browser bar of a device frame.
- **Paper Shade** (ink at 9% on Drafting Paper): the exhibit tray that holds a group of devices.
- **Studio Ink** (#0D0C0B): all text on paper, the primary button on paper, the initial mark.
- **Ink Muted** (#64615c): secondary text and section labels on paper (holds 4.5:1 on Drafting Paper).
- **Hairline** (ink at 13%): dividers between list rows, device frame borders, secondary button outline.
- **Studio Black** (#0B0A09): the hero panel, the footer panel, the dark stage behind phone screenshots.
- **Lamplight** (#EFE9DF): text on Studio Black.
- **Lamplight Muted** (Lamplight at 56% on Studio Black): the hero's second line, labels and small print on dark.
- **Panel Hairline** (Lamplight at 15%): outlines on dark (status pill, secondary button on dark).

### Product exception: Calendario Turni
The Calendario Turni pages (`/calendario-turni/`, its privacy page) use the app's own Teal Sage theme from the Flutter code, not this palette: **CT Night** (#0e1513) and **CT Night Surface** (#1a2120) as the dark scheme, **CT Mint** (#82d5c8) with **CT Mint Ink** (#003731) as the accent and its label, **CT Teal** (#006a60) on **CT Mist** (#edf4f1) for the light-scheme band. Their type is the app's own face, Google Sans Flex (from `lib/theme.dart`), not Host Grotesk. On the home page, CT Night appears only behind the app's own screenshots and icon.

### Named Rules
**The One Light Rule.** Signal Lime is the only accent on the home page. It appears as a dot, a dark-panel button or one serif word on dark; never as a ground for large areas and never as text on paper.

**The Product Wears Its Own Clothes Rule.** A product subpage follows the design system of the product it supports (the app's theme, the website's own tokens). The home page's system stops at the product page's door.

## Typography

**Display Font:** Host Grotesk (with system-ui, sans-serif)
**Body Font:** Host Grotesk (with system-ui, sans-serif)
**Accent Font:** Instrument Serif, italic only (with Georgia, serif)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace)

**Character:** A tight, contemporary grotesk carries everything; a single hand-cut serif italic word per heading is the signature, like initials on a drawing. Mono labels add the engineer's precision.

### Hierarchy
- **Display** (500, clamp(62px, 11.2vw, 168px), 0.88): the name in the hero only, tracked very tight (-0.055em), optically pulled left (-0.04em).
- **Statement** (500, clamp(28px, 3.5vw, 52px), 1.08): the hero's second line under the name, in Lamplight Muted, its last word in the serif italic and lime.
- **Headline** (500, clamp(32px, 4.2vw, 62px), 1.02): section headings (h2), tracked -0.035em.
- **Title** (500, 19px, 1.2): project names in cards.
- **Lead** (400, clamp(19px, 1.6vw, 23px), 1.4): the hero intro and section leads, max about 34ch in the hero.
- **Body** (400, 17px): running text and list rows (list rows at 15px).
- **Label** (500, 11.5px, 0.1em tracking, uppercase, JetBrains Mono): section labels ("01 — App · iOS e Android"), project kinds, footer column heads, the status pill.

### Named Rules
**The Signature Word Rule.** Every heading carries exactly one word in Instrument Serif italic (at 1.06em, weight 400). It is the word that carries the meaning (turni, romano, nuovo, siti web), not a filler word.

**The Numbered Index Rule.** Each section opens with a mono label: a two-digit number, an em dash, the kind. Numbers run in page order.

## Layout

A 12-column grid inside a 1280px container with 80px page margins on desktop (48px on tablet, 24px on phones); the gutter is clamp(16px, 2.6vw, 40px). Every section is one or two screens tall at 1440x900, its label and heading first and top-aligned.

The hero and footer are the two framed panels: Studio Black filling the viewport width minus a 10px paper frame (6px on phones), rounded 30px. Text inside them sits on the same container lines as every other section. The hero fills the first screen under the 72px nav: label and status pill on top, the name and statement in the middle, the intro with actions and the two project cards on the bottom row (columns 1-6 and 8-12).

Project sections alternate text and picture in a 5 + 6 column split (text first), or a full-width heading row over a full-width exhibit tray. On phones everything stacks in one column, buttons go full width, the phone screenshot replaces the two-phone composition, and the device phone beside the browser is dropped.

## Elevation & Depth

Hybrid: the page is flat and tonal at rest (paper, shade, black), and depth comes from material rather than stacking. Grain sits on the paper (ink noise, 5%, multiplied) and on the dark panels (white noise, 5%). Real shadows exist only where an object should feel physical.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 40px 80px -40px color-mix(in oklab, #0D0C0B 35%, transparent)`): under device frames on the exhibit tray, and under a project card while hovered.

### Named Rules
**The Objects Cast Shadows Rule.** Only things that are objects (a phone, a browser window, a card being picked up) cast the Float shadow. Panels, trays and sections never do; they are surfaces, not objects.

## Shapes

Soft, generous corners that grow with the size of the thing: 10px for small thumbnails' inner icons, 16px for media and device browser frames, 22px for cards and trays' inner pieces, 30px for the two studio panels and the exhibit tray, full pills for every button and the status pill. Phones keep a real device silhouette (34px outer radius, 7px near-black bezel). The 10px paper frame around the studio panels is a border in the paper colour, so the panel's corners read as cut out of the page.

## Components

### Buttons
Tactile pills that step on hover and press on click.
- **Shape:** full pill (999px), 44px tall.
- **Primary on paper:** Studio Ink with Lamplight text and a 7px Signal Lime dot after the label.
- **Primary on dark:** Signal Lime with Studio Ink text and an ink dot.
- **Secondary:** transparent with a Hairline outline (Panel Hairline on dark); hover tints the inside with 6% ink.
- **Hover / Press:** background shifts over 0.35s on the system ease (cubic-bezier(.7,0,.2,1)); press nudges down 1px and scales to 0.985.

### Status pill
- **Style:** transparent, Panel Hairline outline, 34px tall, mono label in Lamplight with a static Signal Lime dot. It states a fact ("Disponibile per nuovi progetti"); the dot never pulses.

### Project card (hero)
- **Corner Style:** 22px.
- **Background:** Lifted Paper on Studio Black.
- **Content:** a 64px thumbnail (16px radius: the app icon on CT Night, or a crop of the website), the project title, its mono kind, and a 34px ink circle holding a lime arrow.
- **Hover:** lifts 2px and takes the Float shadow; the arrow slides 3px right; a photographic thumbnail zooms slightly inside its frame. All over 0.4s on the system ease.

### Device frames
- **Phone:** the real screenshot inside a 7px near-black bezel at 34px radius, on Studio Black or CT Night.
- **Browser:** 16px radius, Hairline border, a 34px Lifted Paper bar with three dots and the domain in mono inside a paper pill.
- **Exhibit tray:** Paper Shade at 30px radius with gutter padding; devices on it carry the Float shadow.

### Navigation
- **Style:** Drafting Paper at 92% with an 8px backdrop blur, no bottom rule. The initial mark is a lime "D" on an 8px-radius ink square.
- **Links:** Host Grotesk; the Projects menu opens picture cards (16px radius media), the Calendario Turni card showing the phone from the top on CT Night.
- **Language switch:** mono IT / EN; the current one marked by a 5px dot under it.
- **Mobile:** the mark, the primary pill and the menu button; the menu opens full screen.

### Section label
- **Style:** JetBrains Mono 11.5px uppercase, 0.1em tracking, Ink Muted on paper, preceded by a 7px dot (ink on paper, lime on dark).

## Do's and Don'ts

### Do:
- **Do** put the two studio panels (hero, footer) inside the 10px paper frame, rounded 30px, with their text on the container lines.
- **Do** set one word per heading in Instrument Serif italic, and give each section a numbered mono label.
- **Do** show real product screenshots, in the visitor's language, inside phone or browser frames.
- **Do** keep Signal Lime to dots, the dark-panel primary button and the accent word on dark.
- **Do** give product subpages their own product's design system (Calendario Turni: Teal Sage).

### Don't:
- **Don't** set Signal Lime text on Drafting Paper or Lifted Paper; it fails contrast.
- **Don't** use Ember until a real need for a second accent is agreed.
- **Don't** put a WebGL or particle scene in the hero; the three.js "code compiling" hero was tried and removed.
- **Don't** pulse the status dot or any other dot; they state facts, not live data.
- **Don't** give panels, trays or sections a drop shadow; only objects float.
- **Don't** use illustrations, stock photos or drawn device mock-ups in place of real screenshots.
