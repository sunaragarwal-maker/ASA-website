import { Quote } from "lucide-react";
import { testimonials } from "../content";

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold uppercase mb-3">
            Client Feedback
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy-950">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm flex flex-col"
            >
              <Quote className="w-7 h-7 text-gold-500/50" />
              <p className="mt-4 text-gray-700 leading-relaxed grow">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-950 flex items-center justify-center shrink-0">
                  <span className="text-gold-400 text-sm font-serif">
                    {initials(t.name)}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-navy-950">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
