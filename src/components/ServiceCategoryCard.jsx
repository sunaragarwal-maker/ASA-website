import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "../iconRegistry";
import { IconTile, Heading } from "./ui";

/**
 * One of the 8 premium category cards on the Services landing page. The
 * whole card is a single link (not a card with a separate button inside)
 * so it's one tab stop and one click target, per WCAG target-size and
 * predictable-navigation guidance.
 */
export default function ServiceCategoryCard({ category }) {
  const Icon = getIcon(category.icon);
  return (
    <Link
      to={`/services/${category.slug}`}
      className="group block rounded-2xl border border-border bg-surface p-7 shadow-sm
        transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2"
    >
      <div className="flex items-start justify-between">
        <IconTile icon={Icon} />
        <ArrowUpRight
          className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gold-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
      <Heading level={3} as="h3" className="mt-5">
        {category.name}
      </Heading>
      <p className="mt-2 text-sm text-ink-muted leading-relaxed">{category.tagline}</p>
    </Link>
  );
}
