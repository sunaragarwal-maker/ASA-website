import { GraduationCap, Landmark } from "lucide-react";
import { firm } from "../content";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-14 items-center">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] rounded-2xl bg-navy-900 flex items-center justify-center relative overflow-hidden">
            <Landmark className="w-20 h-20 text-gold-500/40" />
            <div className="absolute bottom-0 inset-x-0 bg-navy-950/80 px-6 py-4">
              <p className="text-white font-serif text-lg">{firm.founder}</p>
              <p className="text-gold-400 text-sm">{firm.founderCreds} &middot; Founder</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-gold-600 tracking-[0.2em] text-xs font-semibold uppercase mb-3">
            About the Founder
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy-950">
            Two Decades of Dedicated Financial Expertise
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">{firm.founderBio}</p>

          <div className="mt-8 flex items-start gap-3">
            <GraduationCap className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
            <p className="text-gray-600">
              Qualified Chartered Accountant, Institute of Chartered Accountants
              of India (ICAI) &mdash; Diploma in Information Systems Audit (DISA).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
