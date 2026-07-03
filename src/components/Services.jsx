import {
  Receipt,
  FileCheck2,
  ShieldCheck,
  Building2,
  BookOpenCheck,
  Globe2,
} from "lucide-react";
import { services } from "../content";

const icons = {
  Receipt,
  FileCheck2,
  ShieldCheck,
  Building2,
  BookOpenCheck,
  Globe2,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-600 tracking-[0.2em] text-xs font-semibold uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy-950">
            Comprehensive Services for Every Financial Need
          </h2>
          <p className="mt-4 text-gray-600">
            From routine compliance to strategic financial planning, we bring
            the same care and rigor to every engagement.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="mt-5 font-serif text-lg text-navy-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
