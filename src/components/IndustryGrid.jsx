import { industries } from "../servicesData";
import { getIcon } from "../iconRegistry";

/**
 * The 11 industries served, shared across the Services landing page and
 * every category page — one list, not re-typed per page.
 */
export default function IndustryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {industries.map((industry) => {
        const Icon = getIcon(industry.icon);
        return (
          <div
            key={industry.name}
            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-4"
          >
            <Icon className="w-5 h-5 text-gold-700 shrink-0" aria-hidden="true" />
            <span className="text-sm font-medium text-navy-950">{industry.name}</span>
          </div>
        );
      })}
    </div>
  );
}
