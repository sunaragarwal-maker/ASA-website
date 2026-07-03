# Design System

Live reference: run the dev server and visit `#/design-system` (not linked
in the nav — internal only). It renders every token and component variant
below, including a working dark-mode toggle.

## Where things live

- `src/index.css` — tokens: color ramps, semantic aliases, shadows,
  letter-spacing, dark-mode variant scaffold.
- `src/components/ui/` — the primitive components. Import from
  `src/components/ui/index.js`.
- `src/pages/DesignSystemPage.jsx` — the living style guide.

## Status: system built, pages not yet migrated

This pass built the foundation and did **not** touch the existing marketing
sections (`Hero`, `About`, `Services`, `WhyChooseUs`, `Testimonials`,
`FounderMessage`, `CTABanner`, `Contact`, `Footer`, `Navbar`). Those still
contain the duplicated patterns this system was built to replace (repeated
eyebrow/card/button className strings, `tracking-[0.2em]` arbitrary values,
one hardcoded hex in `Hero.jsx`'s background grid). Migrating them onto the
primitives below is the natural next step, deliberately left undone so the
system could be reviewed on its own first.

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

## Accessibility gaps this closed

- **Focus states**: previously only form inputs had any focus ring; every
  button/link had none. `Button` and `TextLink` now carry
  `focus-visible:ring-2 focus-visible:ring-gold-500` with a
  context-appropriate ring offset.
- **Disabled states**: didn't exist anywhere. `Button` and `Input`/`Textarea`
  now both support them.

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

- Migrate the nine existing section components onto these primitives.
- `Hero.jsx` hardcodes `#c9a227` in a raw CSS `linear-gradient` string —
  should reference `var(--color-gold-500)` instead once that file is
  touched (left alone this pass — page-specific, out of scope).
- Dark mode is real for the primitives (`Card`, `Input`/`Textarea`, `Badge`,
  `Section`) but not for page copy, which still uses raw `text-gray-*`
  utilities with no `dark:` counterpart. Full page dark mode needs a second
  pass through content text colors if it's ever activated.
