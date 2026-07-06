# Design System

Live reference: run the dev server and visit `/design-system` (not linked
in the nav, and excluded via `robots.txt` — internal only). It renders every
token and component variant below, including a working dark-mode toggle.

## Where things live

- `src/index.css` — tokens: color ramps, semantic aliases, shadows,
  letter-spacing, dark-mode variant scaffold.
- `src/components/ui/` — the primitive components. Import from
  `src/components/ui/index.js`.
- `src/pages/DesignSystemPage.jsx` — the living style guide.

## Status

Every page and component in the site — the Services ecosystem
(`ServicesPage`, `ServiceCategoryPage`, and their supporting components) and
the original marketing components (`Hero`, `About`, `WhyChooseUs`,
`Testimonials`, `FounderMessage`, `CTABanner`, `Contact`, `Footer`, `Navbar`)
— is now built on the primitives in `src/components/ui/`. The two halves of
the site no longer look like two different products: same `Eyebrow`,
`Heading`, `Button`, `Card`, `IconTile` treatment everywhere. That's the
pattern going forward — new pages are assembled from `src/components/ui/`,
not hand-written utility strings.

Two homepage additions from that same pass: `ServicesTeaser` (a 4-of-8
preview of the Services ecosystem, so a first-time visitor sees what the
firm does before being asked to book a consultation) and `FounderTeaser` (a
condensed founder-credibility block, distinct from the full letter in
`FounderMessage` which stays on `/about` — the two don't repeat the same
paragraph). `Contact` also gained a real Google Maps embed built from
`firm.mapQuery` (previously defined in `content.js` and never rendered), and
unknown routes now render a branded `NotFoundPage` instead of silently
redirecting to `/`.

## Tokens

**Color** — two 11/10-step brand ramps (`navy-50…950`, `gold-50…900`), plus
a semantic layer components should prefer for structural intent:
`surface`, `surface-alt`, `surface-dark`, `ink`, `ink-muted`, `brand`,
`brand-strong`, `border`. Repointing the semantic layer is what makes dark
mode a token edit later instead of a find-and-replace.

**Shadows** — `shadow-sm/md/lg/xl` are overridden globally with navy-tinted
values instead of Tailwind's default neutral gray. They double as a 3-step
elevation system: `sm` = resting card, `md` = hover/active, `lg` = floating
(sticky nav, WhatsApp button). `xl` is reserved for future overlays.

**Spacing & radius** — no new scale; Tailwind's default 4px scale is used
only at 8px-aligned steps (4/8/12/16/24/32/48/64...). Radius: `rounded-lg`
for inputs, `rounded-xl` for icon tiles, `rounded-2xl` for cards/media,
`rounded-full` for pills/avatars — enforced by the components, not by a new
token.

**Tracking** — `tracking-eyebrow` (0.2em) replaces the `tracking-[0.2em]`
arbitrary value that was duplicated seven times.

## Brand motif: the seal

The logo (`Logo.jsx`) is a navy circle with a thin gold ring and a gold
serif monogram — a seal, not just a wordmark. Rather than redesigning it,
one later pass formalized that construction (circle + gold ring + gold
serif content on navy) as the site's recurring signature, applied in a
few high-repetition spots rather than scattered everywhere:

- **`BrandRing.jsx`** — the logo's ring geometry alone, used as a large
  low-opacity watermark (hero sections, footer, contact, founder
  portraits). Unchanged by this pass; still the "big, sparse" usage.
- **`SealPattern.jsx`** — a small stroke-only circle tiled at low opacity,
  used as the background texture on every dark hero section (`Hero`,
  `ServicesPage`, `ServiceCategoryPage`, `NotFoundPage`). Replaces a
  generic crossed-line grid that had no connection to the brand; the
  4 identical copies of that grid's inline style were also collapsed into
  this one component.
- **The ring border itself** — `Avatar`, `ProcessTimeline`'s step-number
  circles, and the founder-initials circles (`About`, `FounderTeaser`) are
  all "navy circle + gold serif content," matching the logo's fill and
  type but previously missing the ring that makes it read as a seal
  rather than a plain dark circle. All three now carry
  `ring-1 ring-inset ring-gold-500/40` (or the `/25` variant on
  `About`'s rectangular portrait frame, which stays rectangular but gets
  a matching gold border instead of none).
- **`Divider`'s `ornament` prop** — a hollow ring centered on a hairline,
  used exactly once (the footer, present on every page) rather than on
  every rule sitewide — the point is recognizable repetition, not
  covering every surface in rings.
- **Category-page hero icon** (`ServiceCategoryPage`) — was a squared,
  white-bordered tile (`rounded-3xl border-white/10`); now a gold-ringed
  circle, matching the medallion language instead of reading as a
  generic SaaS card.

Deliberately unchanged: the navy/gold palette itself. A third accent
color was considered and rejected — two disciplined colors read as more
premium than three, and the brief was to build a language *around* the
existing mark, not widen the palette.

## Components

| Component | Replaces |
|---|---|
| `Container` | `max-w-6xl mx-auto px-6` (repeated in every section) |
| `Section` | `py-24 bg-*` (was a fixed, non-responsive value; now `py-16 md:py-24`) |
| `Eyebrow` | the uppercase label above every heading |
| `Heading` | the three heading sizes (`level` 1/2/3) |
| `SectionHeading` | Eyebrow + Heading + optional subtext, centered or left |
| `Button` | every CTA — polymorphic via `as` (`Link`, `"a"`, `"button"`), variants `primary/dark/outline/ghost`, sizes `sm/md/lg`, plus loading/disabled/focus-visible built in |
| `Card` | service/testimonial cards, quote panels, form/info panels (`tone` light/muted/dark) |
| `IconTile` | the icon-in-rounded-square pattern, plus the circular WhyChooseUs variant |
| `Avatar` | testimonial initials circle |
| `Badge` | not yet used anywhere — built for the first tag/status feature |
| `TextLink` | inline body-copy links — not yet used in any copy |
| `Input` / `Textarea` / `Field` | the contact form fields, now with error and disabled states designed in |
| `Skeleton` | not yet used — built for the first async data feature |
| `Divider` | the ad hoc `border-t` hairlines |

Built for the Services ecosystem specifically (in `src/components/`, not
`ui/` — they compose the primitives above rather than being primitives
themselves):

| Component | Purpose |
|---|---|
| `Seo` | per-route title/description/canonical/OG tags |
| `Breadcrumbs` | visual trail + `BreadcrumbList` JSON-LD from one data source |
| `FAQAccordion` | accessible accordion + `FAQPage` JSON-LD from one data source |
| `MegaMenu` | desktop Services dropdown, driven by `servicesData.js` |
| `ProcessTimeline`, `IndustryGrid`, `WhyChooseUsGrid` | the three sections repeated on the landing page and every category page |
| `IconCard` | icon + title + description card — renders both "individual services" and "benefits" |
| `ServiceCategoryCard` | the 8 clickable cards on the Services landing page |

## Accessibility gaps this closed

- **Focus states**: previously only form inputs had any focus ring; every
  button/link had none. `Button` and `TextLink` now carry a focus-visible
  ring with a context-appropriate offset.
- **Disabled states**: didn't exist anywhere. `Button` and `Input`/`Textarea`
  now both support them.
- **Two real WCAG AA contrast failures**, found in a later self-review pass
  (not caught when each component was first built) and fixed sitewide, not
  just in the file where they were noticed:
  - The eyebrow label color (`gold-600`, `#a8841c`) only hits 3.51:1 against
    white — short of the 4.5:1 required for small text. Now `gold-700`
    (`#866815`, 5.24:1). This was hardcoded in seven places, including three
    files that predate this design system (`About.jsx`, `Contact.jsx`,
    `Testimonials.jsx`, `FounderMessage.jsx`) — fixed everywhere, since a
    color contrast failure isn't something to leave in place on the excuse
    that the file wasn't otherwise in scope.
  - The focus ring color (`gold-500`) only hits 2.42:1 against light
    backgrounds — short of the 3:1 minimum for focus indicators (WCAG
    2.4.11 / 1.4.11). Standardized on `gold-600`, which clears 3:1 against
    every background actually in use (white, `gray-50`, `gray-100`, and
    `navy-950`).
  - Error-state red (`red-400` border/ring, `red-500` text) was under
    threshold too; both are now `red-600`.
- Every page now has exactly one `<h1>` — `About` and `Contact` had zero
  before a heading-hierarchy audit caught it (both opened directly at `h2`).

## A gotcha worth remembering

Tailwind v4 only emits a `--color-*` custom property (and its
`bg-`/`text-`/`border-` utilities) for a shade it can see as **literal text**
in a source file. Building a class name at runtime — `` `bg-navy-${step}` ``
— is invisible to that scan, and the unused shade gets silently dropped from
the compiled CSS. This actually happened while building the color swatches
on the style guide page (seven of the eleven navy steps rendered as blank
white squares in the first build). The fix is always the same: write the
full class name out literally somewhere Tailwind's scanner can see it, even
if you then select it from a lookup object — `{ 50: "bg-navy-50", ... }` is
safe because `"bg-navy-50"` appears as real text in the file; `` `bg-navy-${n}` ``
is not.

## Known follow-ups

- Dark mode is real for the primitives (`Card`, `Input`/`Textarea`, `Badge`,
  `Section`) but not for page copy, which still uses raw `text-gray-*`
  utilities with no `dark:` counterpart. Full page dark mode needs a second
  pass through content text colors if it's ever activated.
- The Google Maps embed in `Contact.jsx` uses `firm.mapQuery` (a plain
  address string) via the no-API-key `/maps?q=...&output=embed` endpoint —
  fine for one office, but if the firm ever has multiple locations this
  should move to something more structured than a single content field.

## Services ecosystem architecture (routing, SEO)

The site grew from 4 static pages to 13 (8 service categories + landing +
home/about/contact) in the same pass that built this out. Two decisions
worth understanding before extending it further:

**Routing: `BrowserRouter`, not `HashRouter`.** The site started on
`HashRouter` (URLs like `#/about`) because GitHub Pages has no server-side
rewrite rules — a direct request to a real path like `/services/taxation`
404s, since there's no matching static file. Clean URLs were worth fixing
that for, so `public/404.html` + a decode script in `index.html` implement
the standard GitHub Pages SPA fallback
([rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)):
GitHub serves `404.html` for any unknown path, which re-encodes it as a
query string and redirects to the app shell; the app shell decodes it back
to a real path before React Router mounts. `App.jsx`'s `BrowserRouter`
carries `basename="/ASA-website"` to match `vite.config.js`'s `base`.

**SEO is real but partial, by the nature of a client-only SPA.** `Seo.jsx`
updates `document.title`, meta description, canonical, and OG tags per
route; `FAQAccordion` and `Breadcrumbs` emit their own JSON-LD from the same
data they render visually, so structured data can't drift out of sync with
the page. `index.html` carries a static site-wide `ProfessionalService`
JSON-LD block. Google's crawler executes JavaScript, so this should get
indexed reasonably well. What this does **not** solve: social-media
link-unfurling bots (Facebook, WhatsApp, LinkedIn, Slack) don't run
JavaScript and only ever read `index.html`'s static tags — sharing a link
straight to `/services/taxation` will show the homepage's OG title/
description in the preview card, not the Taxation page's. Fixing that
properly means prerendering or server-side rendering, which is a bigger
architectural call than this pass made unilaterally.

**Data-driven, not page-per-file.** All 8 category pages are one component,
`ServiceCategoryPage.jsx`, driven by `servicesData.js` and matched via
`useParams()` + a `services/:slug` route. Adding category #9 means adding an
entry to `serviceCategories` in `servicesData.js` — no new route, no new
page file, no nav change beyond what's already data-driven (`MegaMenu` and
the mobile accordion both map over `serviceCategories` directly).
