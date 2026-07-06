import { useEffect, useState } from "react";
import { Award, Landmark, Mail, Phone, ShieldCheck } from "lucide-react";
import {
  Container,
  Divider,
  Eyebrow,
  Heading,
  SectionHeading,
  Button,
  Card,
  IconTile,
  Avatar,
  Badge,
  TextLink,
  Input,
  Textarea,
  Field,
  Skeleton,
} from "../components/ui";

/*
  Tailwind v4 only emits a --color-* custom property (and its bg-/
  text-/border- utilities) for shades it can see as literal text
  somewhere in the source. Building class names at runtime via
  `bg-navy-${step}` is invisible to that scan and silently drops
  unused shades from the compiled CSS - which is exactly what happened
  here before this was written out in full. Every class name below is
  a real, complete string for that reason.
*/
const navySwatches = [
  ["50", "bg-navy-50"],
  ["100", "bg-navy-100"],
  ["200", "bg-navy-200"],
  ["300", "bg-navy-300"],
  ["400", "bg-navy-400"],
  ["500", "bg-navy-500"],
  ["600", "bg-navy-600"],
  ["700", "bg-navy-700"],
  ["800", "bg-navy-800"],
  ["900", "bg-navy-900"],
  ["950", "bg-navy-950"],
];

const goldSwatches = [
  ["50", "bg-gold-50"],
  ["100", "bg-gold-100"],
  ["200", "bg-gold-200"],
  ["300", "bg-gold-300"],
  ["400", "bg-gold-400"],
  ["500", "bg-gold-500"],
  ["600", "bg-gold-600"],
  ["700", "bg-gold-700"],
  ["800", "bg-gold-800"],
  ["900", "bg-gold-900"],
];

const semanticSwatches = [
  ["surface", "bg-surface border border-gray-200"],
  ["surface-alt", "bg-surface-alt"],
  ["surface-dark", "bg-surface-dark"],
  ["ink", "bg-ink"],
  ["ink-muted", "bg-ink-muted"],
  ["brand", "bg-brand"],
  ["brand-strong", "bg-brand-strong"],
  ["border", "bg-border"],
];

function SwatchRow({ name, swatches }) {
  return (
    <div>
      <p className="text-sm font-medium text-navy-950 mb-2">{name}</p>
      <div className="flex flex-wrap gap-2">
        {swatches.map(([step, className]) => (
          <div key={step} className="text-center">
            <div className={`w-14 h-14 rounded-lg border border-gray-100 ${className}`} />
            <p className="mt-1 text-[11px] text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpecimenRow({ label, children }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-4">
      <p className="w-40 shrink-0 text-sm text-gray-500">{label}</p>
      <div>{children}</div>
    </div>
  );
}

function SpacingBar({ px }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gold-500 h-4" style={{ width: `${px}px` }} />
      <span className="text-sm text-gray-500 font-mono">{px}px</span>
    </div>
  );
}

export default function DesignSystemPage() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Design System | Internal Reference";
  }, []);

  return (
    <div className="pt-32 pb-24">
      <Container>
        <Eyebrow>Internal Reference — Not Public Navigation</Eyebrow>
        <Heading level={1}>Design System</Heading>
        <p className="mt-4 text-lg text-ink-muted max-w-2xl">
          Every token and reusable component the site is built from, in one
          place. New sections and pages should be assembled from what's on
          this page rather than hand-writing new utility strings.
        </p>
      </Container>

      {/* COLOR */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Foundations"
          title="Color"
          subtext="Two brand ramps (navy, gold) plus a semantic layer on top — surface/ink/border/brand — that components should prefer over raw palette names. Repointing the semantic layer is what makes dark mode a token edit later instead of a rewrite."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <SwatchRow name="Navy" swatches={navySwatches} />
          <SwatchRow name="Gold" swatches={goldSwatches} />
        </div>
        <div className="mt-8">
          <p className="text-sm font-medium text-navy-950 mb-2">Semantic aliases</p>
          <div className="flex flex-wrap gap-2">
            {semanticSwatches.map(([name, className]) => (
              <div key={name} className="text-center">
                <div className={`w-20 h-14 rounded-lg ${className}`} />
                <p className="mt-1 text-[11px] text-gray-500">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* TYPOGRAPHY */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Foundations"
          title="Typography"
          subtext="Source Serif for anything a visitor should read as a heading; Inter for everything else. Three heading sizes, one eyebrow style, two body tones — no other combination should appear on the site."
        />
        <Card tone="light" className="mt-10">
          <SpecimenRow label="Eyebrow">
            <Eyebrow>Section Label</Eyebrow>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Heading level 1">
            <Heading level={1}>Trusted Financial Guidance</Heading>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Heading level 2">
            <Heading level={2}>Comprehensive Services</Heading>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Heading level 3">
            <Heading level={3}>Income Tax Filing</Heading>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Body">
            <p className="text-ink-muted max-w-md">
              Accurate, on-time filings paired with proactive planning to
              legally minimize your tax burden.
            </p>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Text link">
            <p className="text-ink-muted">
              Read our <TextLink href="#">GST filing guide</TextLink> before
              your next return.
            </p>
          </SpecimenRow>
        </Card>
      </Container>

      {/* SPACING & RADIUS */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Foundations"
          title="Spacing & Radius"
          subtext="Tailwind's default 4px scale, used only at its 8px-aligned steps (4/8/12/16/24/32/48/64). Section vertical rhythm and the page container width are both componentized so no page hand-writes py-24 or max-w-6xl again."
        />
        <Card tone="light" className="mt-10 space-y-3">
          {[4, 8, 12, 16, 24, 32, 48, 64].map((px) => (
            <SpacingBar key={px} px={px} />
          ))}
        </Card>
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            ["rounded-lg", "rounded-lg"],
            ["rounded-xl", "rounded-xl"],
            ["rounded-2xl", "rounded-2xl"],
            ["rounded-full", "rounded-full"],
          ].map(([label, cls]) => (
            <div key={label} className="text-center">
              <div className={`w-16 h-16 bg-navy-950 ${cls}`} />
              <p className="mt-1 text-[11px] text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* ELEVATION */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Foundations"
          title="Elevation"
          subtext="Navy-tinted shadows (not Tailwind's default neutral gray) at three steps: resting, hover/active, and floating (sticky nav, the WhatsApp button)."
        />
        <div className="mt-10 grid sm:grid-cols-3 gap-8 bg-gray-100 p-8 rounded-2xl">
          {[
            ["Resting", "shadow-sm"],
            ["Hover / active", "shadow-md"],
            ["Floating", "shadow-lg"],
          ].map(([label, cls]) => (
            <div key={label} className="text-center">
              <div className={`h-20 rounded-2xl bg-white ${cls}`} />
              <p className="mt-3 text-sm text-gray-500">
                {label} <span className="font-mono text-xs">({cls})</span>
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* BUTTONS */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Components"
          title="Buttons"
          subtext="One component for every CTA on the site: polymorphic (renders as a router Link, a plain anchor, or a real button), with consistent focus, disabled, and loading treatment."
        />
        <Card tone="light" className="mt-10 space-y-8">
          <SpecimenRow label="Primary">
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Dark">
            <Button variant="dark">Book a Consultation</Button>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Outline (light)">
            <Button variant="outline" context="light">
              Learn more
            </Button>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Outline (dark bg)">
            <div className="bg-navy-950 rounded-xl p-4 inline-flex">
              <Button variant="outline" context="dark">
                <Phone className="w-4 h-4" />
                Call us
              </Button>
            </div>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Ghost">
            <Button variant="ghost" context="light">
              Cancel
            </Button>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Disabled">
            <Button disabled>Unavailable</Button>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Loading">
            <Button loading={loading} onClick={() => setLoading((v) => !v)}>
              {loading ? "Sending..." : "Click to preview loading"}
            </Button>
          </SpecimenRow>
          <Divider />
          <SpecimenRow label="Focus (tab to it)">
            <Button variant="dark">Tab to me</Button>
          </SpecimenRow>
        </Card>
      </Container>

      {/* CARDS */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Components"
          title="Cards"
          subtext="Three tones cover every current surface: light (services, testimonials), muted (form panels, info rows), and dark (quote panels, stat tiles on the hero)."
        />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          <Card tone="light" hoverLift>
            <IconTile icon={ShieldCheck} />
            <Heading level={3} className="mt-5">
              Light + hover lift
            </Heading>
            <p className="mt-2 text-sm text-ink-muted">
              Hover this card — used for anything acting as a single click
              target.
            </p>
          </Card>
          <Card tone="muted">
            <IconTile icon={Mail} size="sm" />
            <Heading level={3} className="mt-5">
              Muted
            </Heading>
            <p className="mt-2 text-sm text-ink-muted">
              Form panels and contact info rows — no shadow, just a flat alt
              background.
            </p>
          </Card>
          <Card tone="dark">
            <IconTile icon={Award} />
            <Heading level={3} tone="onDark" className="mt-5">
              Dark
            </Heading>
            <p className="mt-2 text-sm text-gray-300">
              Quote panels and anything that needs to read as a distinct,
              brand-forward block.
            </p>
          </Card>
        </div>
      </Container>

      {/* ICON TILES + AVATAR */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Components"
          title="Icon Tiles & Avatars"
          subtext="The icon container from service cards and contact rows, the circular variant from Why Choose Us, and the initials avatar from testimonials."
        />
        <Card tone="light" className="mt-10 flex flex-wrap items-center gap-8">
          <IconTile icon={Landmark} size="sm" />
          <IconTile icon={Landmark} size="md" />
          <IconTile icon={Landmark} size="lg" />
          <IconTile icon={Award} circle />
          <Avatar name="Anita Sharma" size="sm" />
          <Avatar name="Anita Sharma" size="md" />
          <Avatar name="Anita Sharma" size="lg" />
        </Card>
      </Container>

      {/* BADGES */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Components"
          title="Badges & Tags"
          subtext="Not used on the site yet — no blog or categorization feature exists — but ready for the first one that needs a status flag or category tag."
        />
        <Card tone="light" className="mt-10 flex flex-wrap gap-3">
          <Badge tone="gold">Gold solid</Badge>
          <Badge tone="navy">Navy solid</Badge>
          <Badge tone="neutral">Neutral solid</Badge>
          <Badge tone="gold" variant="outline">
            Gold outline
          </Badge>
          <Badge tone="navy" variant="outline">
            Navy outline
          </Badge>
          <Badge tone="neutral" variant="outline">
            Neutral outline
          </Badge>
        </Card>
      </Container>

      {/* FORMS */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Components"
          title="Form Fields"
          subtext="Label + input/textarea + helper or error text, sharing one focus-ring and disabled treatment so the two can't drift apart."
        />
        <Card tone="muted" className="mt-10 grid sm:grid-cols-2 gap-6">
          <Field label="Normal" htmlFor="ds-normal" helpText="Helper text goes here">
            <Input id="ds-normal" placeholder="Your name" />
          </Field>
          <Field label="Required" htmlFor="ds-required" required>
            <Input id="ds-required" placeholder="you@example.com" />
          </Field>
          <Field label="Error" htmlFor="ds-error" error="This field is required">
            <Input id="ds-error" error placeholder="Your name" />
          </Field>
          <Field label="Disabled" htmlFor="ds-disabled">
            <Input id="ds-disabled" disabled placeholder="Not editable" />
          </Field>
          <Field label="Textarea" htmlFor="ds-textarea" className="sm:col-span-2">
            <Textarea id="ds-textarea" rows={3} placeholder="Tell us briefly..." />
          </Field>
        </Card>
      </Container>

      {/* SKELETONS */}
      <Container className="mt-20">
        <SectionHeading
          align="left"
          eyebrow="Components"
          title="Loading Skeletons"
          subtext="No async data anywhere on the site yet, so nothing calls this today — built ahead of the first feature that will (a blog list, a status widget)."
        />
        <Card tone="light" className="mt-10 flex items-center gap-4">
          <Skeleton variant="avatar" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" className="w-1/3" />
            <Skeleton variant="text" className="w-2/3" />
          </div>
        </Card>
        <Card tone="light" className="mt-4">
          <Skeleton variant="block" className="h-32" />
        </Card>
      </Container>

      {/* DARK MODE */}
      <Container className="mt-20 mb-8">
        <SectionHeading
          align="left"
          eyebrow="Readiness"
          title="Dark Mode"
          subtext="Not switched on anywhere in the live site. Card, Input/Textarea, Badge, and Section already carry dark: variants driven by a .dark class on the root — toggle the panel below to see them respond live. Extending this to page copy (which uses raw text-gray-* utilities) is the remaining work if dark mode ever becomes a real feature."
        />
        <div className="mt-6">
          <Button variant="dark" onClick={() => setDark((v) => !v)}>
            {dark ? "Turn dark preview off" : "Turn dark preview on"}
          </Button>
        </div>
        <div className={dark ? "dark" : ""}>
          <Card tone="light" className="mt-6 space-y-4">
            <Field label="Email" htmlFor="ds-dark-input">
              <Input id="ds-dark-input" placeholder="you@example.com" />
            </Field>
            <div className="flex gap-3">
              <Badge tone="neutral">Neutral</Badge>
              <Badge tone="neutral" variant="outline">
                Outline
              </Badge>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
