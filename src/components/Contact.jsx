import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { firm } from "../content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:${firm.email}?subject=${subject}&body=${body}`;
  };

  const infoItems = [
    { icon: Phone, label: "Phone", value: firm.phone, href: `tel:${firm.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: firm.email, href: `mailto:${firm.email}` },
    { icon: MapPin, label: "Office", value: firm.address, href: null },
    { icon: Clock, label: "Hours", value: firm.hours, href: null },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-600 tracking-[0.2em] text-xs font-semibold uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy-950">
            Let's Discuss Your Financial Needs
          </h2>
          <p className="mt-4 text-gray-600">
            Reach out for a consultation, we typically respond within one
            business day.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {infoItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-navy-950 font-medium">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-gray-100 bg-gray-50 p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1.5" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1.5" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500"
                placeholder="Tell us briefly about what you need help with..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 font-medium text-white hover:bg-navy-800 transition-colors"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
