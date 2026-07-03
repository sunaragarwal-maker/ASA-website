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
            "linear-gradient(#c9a227 1px, transparent 1px), linear-gradient(90deg, #c9a227 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <p className="text-gold-400 tracking-[0.2em] text-xs font-medium uppercase mb-4">
            Chartered Accountants &middot; Since {firm.yearFounded}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
            {firm.tagline}
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            {firm.name} provides expert taxation, audit, and financial advisory
            services to individuals and businesses, delivered with the
            personal attention only an experienced, dedicated firm can offer.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-medium text-navy-950 hover:bg-gold-400 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${firm.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-medium text-white hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              {firm.phone}
            </a>
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
                <Icon className="w-5 h-5 text-gold-500/70 mx-auto mb-2" />
                <div className="font-serif text-3xl text-gold-400">{s.value}</div>
                <div className="mt-1 text-xs text-gray-300 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
