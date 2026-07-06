import { Award, Users, Clock, HandCoins } from "lucide-react";
import { whyChooseUs } from "../content";
import { Section, SectionHeading, IconTile, Heading } from "./ui";

const icons = { Award, Users, Clock, HandCoins };

export default function WhyChooseUs() {
  return (
    <Section id="why-us" tone="dark">
      <SectionHeading eyebrow="Why Choose Us" title="A Firm You Can Rely On" tone="onDark" />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseUs.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div key={item.title} className="text-center px-4">
              <IconTile icon={Icon} circle className="mx-auto" />
              <Heading level={3} as="h3" tone="onDark" className="mt-5">
                {item.title}
              </Heading>
              <p className="mt-2 text-sm text-ink-inverted-muted leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
