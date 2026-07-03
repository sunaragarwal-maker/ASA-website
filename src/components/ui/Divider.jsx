/**
 * Hairline rule. `tone="dark"` for use on navy backgrounds (footer,
 * WhyChooseUs, dark cards), `tone="light"` for everything else.
 * Replaces the ad hoc `border-t border-white/10` /
 * `border-t border-gray-100` strings that were scattered per component.
 */
export default function Divider({ tone = "light", className = "" }) {
  const toneClass = tone === "dark" ? "border-border-dark" : "border-border";
  return <hr className={`border-t ${toneClass} ${className}`} />;
}
