import { Award, Users, Clock, HandCoins } from "lucide-react";
import { whyChooseUs } from "../content";

const icons = { Award, Users, Clock, HandCoins };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-400 tracking-[0.2em] text-xs font-semibold uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            A Firm You Can Rely On
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div key={item.title} className="text-center px-4">
                <div className="mx-auto w-14 h-14 rounded-full bg-white/5 border border-gold-500/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="mt-5 font-serif text-lg text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
