import { Quote } from "lucide-react";
import { firm } from "../content";

export default function FounderMessage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-14 items-center">
        <div className="md:col-span-3 md:order-1 order-2">
          <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold uppercase mb-3">
            A Note From the Founder
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy-950">
            Are You Looking for a Partner You Can Trust?
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">{firm.founderMessage}</p>
          <p className="mt-6 font-serif text-lg text-navy-950">
            {firm.founder}
            <span className="block text-sm font-sans text-gray-500 mt-1">
              Founder, {firm.name}
            </span>
          </p>
        </div>

        <div className="md:col-span-2 order-1 md:order-2">
          <div className="rounded-2xl bg-navy-950 p-10 relative overflow-hidden">
            <Quote className="w-10 h-10 text-gold-500/40" />
            <p className="mt-4 text-gray-200 leading-relaxed italic">
              "Your success is the only measure of ours that matters."
            </p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white font-serif">{firm.founder}</p>
              <p className="text-gold-400 text-sm">{firm.founderCreds}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
