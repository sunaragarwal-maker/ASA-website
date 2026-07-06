import { Quote } from "lucide-react";
import { testimonials } from "../content";
import { Section, SectionHeading, Card, Avatar } from "./ui";

export default function Testimonials() {
  return (
    <Section id="testimonials" tone="alt">
      <SectionHeading eyebrow="Client Feedback" title="What Our Clients Say" />

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name} tone="light" className="flex flex-col">
            <Quote className="w-7 h-7 text-gold-500/50" aria-hidden="true" />
            <p className="mt-4 text-ink-muted leading-relaxed grow">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
              <Avatar name={t.name} />
              <div>
                <p className="font-serif text-navy-950">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
