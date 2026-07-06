import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { firm } from "../content";
import BrandRing from "./BrandRing";
import { Section, SectionHeading, Card, IconTile, Field, Input, Textarea, Button, TextLink } from "./ui";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(form.email)) errors.email = "Please enter a valid email address.";
  if (!form.message.trim()) errors.message = "Let us know briefly what you need help with.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${firm.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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

          <form onSubmit={handleSubmit} noValidate className="lg:col-span-3">
            <Card tone="muted" padding="p-8" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" htmlFor="name" required error={errors.name}>
                  <Input
                    id="name"
                    name="name"
                    error={!!errors.name}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email Address" htmlFor="email" required error={errors.email}>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    error={!!errors.email}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </Field>
              </div>
              <Field label="Message" htmlFor="message" required error={errors.message}>
                <Textarea
                  id="message"
                  name="message"
                  error={!!errors.message}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about what you need help with..."
                />
              </Field>
              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" variant="dark">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
                {submitted && (
                  <p className="flex items-center gap-2 text-sm text-ink-muted" role="status">
                    <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" aria-hidden="true" />
                    Opening your email client now.
                  </p>
                )}
              </div>
              {submitted && (
                <p className="text-sm text-ink-muted" role="status">
                  If nothing opens, email us directly at{" "}
                  <TextLink href={`mailto:${firm.email}`}>{firm.email}</TextLink>.
                </p>
              )}
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
