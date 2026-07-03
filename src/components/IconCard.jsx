import { getIcon } from "../iconRegistry";
import { Card } from "./ui";

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
      <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center">
        <Icon className="w-6 h-6 text-gold-400" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-serif text-lg text-navy-950">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
    </Card>
  );
}
