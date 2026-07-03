/**
 * Small pill label for status/category tags. Not used on the site yet
 * (no blog/tagging feature exists), but built now so the moment one
 * does — a "New" flag, a service category, a blog topic — it reaches
 * for a token instead of a one-off className.
 *
 * tone: "gold" | "navy" | "neutral"
 * variant: "solid" | "outline"
 */
const solid = {
  gold: "bg-gold-500 text-navy-950",
  navy: "bg-navy-950 text-white",
  neutral: "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200",
};

const outline = {
  gold: "border border-gold-500 text-gold-700 dark:text-gold-400",
  navy: "border border-navy-950/30 text-navy-950 dark:border-white/30 dark:text-white",
  neutral: "border border-gray-300 text-gray-600 dark:border-white/20 dark:text-gray-300",
};

export default function Badge({ tone = "neutral", variant = "solid", className = "", children }) {
  const toneClass = variant === "outline" ? outline[tone] : solid[tone];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}
