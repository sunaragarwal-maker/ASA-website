import { Link } from "react-router-dom";
import {
  ArrowRight,
  PhoneCall,
  TrendingUp,
  Users,
  CalendarCheck2,
  BriefcaseBusiness,
} from "lucide-react";
import { firm, stats } from "../content";
import BrandRing from "./BrandRing";
import { Container, Eyebrow, Heading, Button } from "./ui";

const icons = { TrendingUp, Users, CalendarCheck2, BriefcaseBusiness };

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-navy-950 pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-gold-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-500) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <BrandRing size={520} className="absolute -right-32 -top-32 opacity-[0.06]" />

      <Container className="relative grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <Eyebrow tone="onDark">
            Chartered Accountants &middot; Since {firm.yearFounded}
          </Eyebrow>
          <Heading level={1} tone="onDark">
            {firm.tagline}
          </Heading>
          <p className="mt-6 text-lg text-ink-inverted-muted max-w-xl">
            {firm.name} provides expert taxation, audit, and financial advisory
            services to individuals and businesses, delivered with the
            personal attention only an experienced, dedicated firm can offer.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/contact">
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              as="a"
              href={`tel:${firm.phone.replace(/\s/g, "")}`}
              variant="outline"
              context="dark"
            >
              <PhoneCall className="w-4 h-4" />
              {firm.phone}
            </Button>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s) => {
            const Icon = icons[s.icon];
            return (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-6 text-center"
              >
                <Icon className="w-5 h-5 text-gold-500/70 mx-auto mb-2" aria-hidden="true" />
                <div className="font-serif text-3xl text-gold-400">{s.value}</div>
                <div className="mt-1 text-xs text-ink-inverted-muted uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
