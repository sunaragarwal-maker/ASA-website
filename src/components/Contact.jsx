import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { firm } from "../content";
import BrandRing from "./BrandRing";
import { Section, SectionHeading, Card, IconTile, Field, Input, Textarea, Button } from "./ui";

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
    <Section id="contact" tone="light" className="relative overflow-hidden">
      <BrandRing tone="navy" size={320} className="absolute -right-16 -top-16 opacity-[0.04]" />
      <div className="relative">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Discuss Your Financial Needs"
          subtext="Reach out for a consultation, we typically respond within one business day."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {infoItems.map((item) => {
              const content = (
                <Card tone="muted" padding="p-5" className="flex items-start gap-4">
                  <IconTile icon={item.icon} size="sm" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-navy-950 font-medium">{item.value}</p>
                  </div>
                </Card>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3">
            <Card tone="muted" padding="p-8" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" htmlFor="name">
                  <Input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email Address" htmlFor="email">
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </Field>
              </div>
              <Field label="Message" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about what you need help with..."
                />
              </Field>
              <Button type="submit" variant="dark">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </Card>
          </form>
        </div>

        <div className="mt-10 rounded-2xl border border-border overflow-hidden shadow-sm">
          <iframe
            title={`Map showing ${firm.name}'s office location`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(firm.mapQuery)}&output=embed`}
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
