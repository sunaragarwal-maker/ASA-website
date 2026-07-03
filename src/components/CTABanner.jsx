import { Link } from "react-router-dom";
import { ArrowRight, KeyRound } from "lucide-react";
import { ctaBanner } from "../content";

export default function CTABanner() {
  return (
    <section className="bg-gold-500 py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl md:text-3xl text-navy-950 flex items-center justify-center md:justify-start gap-2">
            <KeyRound className="w-6 h-6 shrink-0" />
            {ctaBanner.heading}
          </h3>
          <p className="mt-2 text-navy-900/80 max-w-xl">{ctaBanner.subtext}</p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 font-medium text-white hover:bg-navy-800 transition-colors shrink-0"
        >
          Book a Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
