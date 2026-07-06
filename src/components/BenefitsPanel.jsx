import { getIcon } from "../iconRegistry";
import BrandRing from "./BrandRing";
import { IconTile, Heading } from "./ui";

/**
 * The "what you actually get" benefits, inset as a dark panel rather than
 * another white icon-card grid — this page already has two of those
 * (Individual Services, WhyChooseUsGrid); a third back-to-back would read
 * as the same section three times. The dark panel also doubles as the
 * page's "this is the payoff" visual beat, echoing the WhyChooseUs
 * treatment on Home rather than inventing a new color language.
 */
export default function BenefitsPanel({ benefits }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-navy-950 p-8 md:p-10">
      <BrandRing size={280} className="absolute -right-16 -bottom-16 opacity-[0.08]" />
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => {
          const Icon = getIcon(benefit.icon);
          return (
            <div key={benefit.title} className="text-center">
              <IconTile icon={Icon} circle className="mx-auto" />
              <Heading level={3} as="h3" tone="onDark" className="mt-4">
                {benefit.title}
              </Heading>
              <p className="mt-2 text-sm text-ink-inverted-muted leading-relaxed">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
