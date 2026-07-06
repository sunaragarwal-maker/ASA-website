/**
 * Hairline rule. `tone="dark"` for use on navy backgrounds (footer,
 * WhyChooseUs, dark cards), `tone="light"` for everything else.
 * Replaces the ad hoc `border-t border-white/10` /
 * `border-t border-gray-100` strings that were scattered per component.
 *
 * `ornament` centers a small hollow ring on the line — a minimal echo of
 * the logo's own ring, reserved for one prominent, recurring spot (the
 * footer) rather than scattered across every rule on the site.
 */
export default function Divider({ tone = "light", ornament = false, className = "" }) {
  const toneClass = tone === "dark" ? "border-border-dark" : "border-border";

  if (!ornament) {
    return <hr className={`border-t ${toneClass} ${className}`} />;
  }

  return (
    <div className={`relative ${className}`} role="separator">
      <hr className={`border-t ${toneClass}`} />
      <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border
          ${tone === "dark" ? "border-gold-400/60" : "border-gold-600/60"}`}
        aria-hidden="true"
      />
    </div>
  );
}
