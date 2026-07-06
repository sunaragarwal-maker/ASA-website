import { Quote } from "lucide-react";
import { firm } from "../content";
import { Section, Eyebrow, Heading, Card } from "./ui";

export default function FounderMessage() {
  return (
    <Section tone="alt">
      <div className="grid md:grid-cols-5 gap-14 items-center">
        <div className="md:col-span-3 md:order-1 order-2">
          <Eyebrow>A Note From the Founder</Eyebrow>
          <Heading level={2}>Are You Looking for a Partner You Can Trust?</Heading>
          <p className="mt-6 text-ink-muted leading-relaxed">{firm.founderMessage}</p>
          <p className="mt-6 font-serif text-lg text-navy-950">
            {firm.founder}
            <span className="block text-sm font-sans text-gray-500 mt-1">
              Founder, {firm.name}
            </span>
          </p>
        </div>

        <div className="md:col-span-2 order-1 md:order-2">
          <Card tone="dark" padding="p-10" className="relative overflow-hidden">
            <Quote className="w-10 h-10 text-gold-500/40" aria-hidden="true" />
            <p className="mt-4 text-gray-200 leading-relaxed italic">
              &ldquo;Your success is the only measure of ours that matters.&rdquo;
            </p>
            <div className="mt-8 pt-6 border-t border-border-dark">
              <p className="text-white font-serif">{firm.founder}</p>
              <p className="text-gold-400 text-sm">{firm.founderCreds}</p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
