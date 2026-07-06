import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getIcon } from "../iconRegistry";
import { IconTile, Heading } from "./ui";

/**
 * One of the 8 premium category cards on the Services landing page. The
 * whole card is a single link (not a card with a separate button inside)
 * so it's one tab stop and one click target, per WCAG target-size and
 * predictable-navigation guidance. `index` drives the large ghost
 * numeral in the corner — a typographic flourish, not a ranking.
 */
export default function ServiceCategoryCard({ category, index = 0 }) {
  const Icon = getIcon(category.icon);
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      to={`/services/${category.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-surface p-7 shadow-sm
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2"
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 right-4 font-serif text-7xl text-gold-500/10 select-none"
      >
        {number}
      </span>

      <IconTile icon={Icon} size="lg" className="relative" />
      <Heading level={3} as="h3" className="relative mt-5">
        {category.name}
      </Heading>
      <p className="relative mt-2 text-sm text-ink-muted leading-relaxed">{category.tagline}</p>

      <div
        className="relative mt-5 flex items-center gap-1.5 text-sm font-medium text-gold-700
          transition-[gap] duration-200 group-hover:gap-2.5"
      >
        Explore {category.name}
        <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
      </div>
    </Link>
  );
}
