import { getIcon } from "../iconRegistry";
import { Card, IconTile, Heading } from "./ui";

/**
 * Icon + title + description card. Used for both "individual services"
 * and "benefits" sections on every service page — the two are visually
 * identical (an icon, a short title, a sentence), so one component
 * renders both rather than maintaining near-duplicate markup twice.
 */
export default function IconCard({ icon, title, description }) {
  const Icon = getIcon(icon);
  return (
    <Card tone="light" hoverLift>
      <IconTile icon={Icon} />
      <Heading level={3} as="h3" className="mt-5">
        {title}
      </Heading>
      <p className="mt-2 text-sm text-ink-muted leading-relaxed">{description}</p>
    </Card>
  );
}
