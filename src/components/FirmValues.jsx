import { MessageCircle, UserCheck, CalendarCheck2, Lock } from "lucide-react";
import { firmValues } from "../content";
import { Section, SectionHeading, Card, IconTile, Heading } from "./ui";

const icons = { MessageCircle, UserCheck, CalendarCheck2, Lock };

/**
 * "The Ground Rules" — concrete commitments rather than an abstract
 * "Our Values" list of one-word buzzwords. Each one is grounded in
 * language already established elsewhere on the site (WhyChooseUs,
 * landingFaqs' "we'll tell you plainly") rather than invented from
 * scratch, so it reads as consistent with the rest of the firm's voice.
 */
export default function FirmValues() {
  return (
    <Section tone="alt">
      <SectionHeading
        eyebrow="How We Work"
        title="The Ground Rules"
        subtext="Four things that don't change, whether it's a five-minute question or a year-long audit."
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {firmValues.map((item) => {
          const Icon = icons[item.icon];
          return (
            <Card key={item.title} tone="light">
              <IconTile icon={Icon} />
              <Heading level={3} as="h3" className="mt-5">
                {item.title}
              </Heading>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
