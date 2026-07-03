/**
 * The circular "seal" geometry from Logo.jsx, extracted and reused as a
 * low-opacity background watermark — the recurring brand motif across
 * hero sections, the footer, and the contact section, instead of the
 * mark itself appearing in more places than it should.
 *
 * Always aria-hidden and non-interactive: it's a background texture,
 * never content. Position it with the `className` prop (e.g.
 * "absolute -right-24 -top-24"). `tone="gold"` (default) reads on dark
 * navy sections; `tone="navy"` is for light/white sections.
 */
export default function BrandRing({ size = 420, tone = "gold", className = "" }) {
  const strokeClass = tone === "navy" ? "stroke-navy-950" : "stroke-gold-500";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="31" fill="none" className={strokeClass} strokeWidth="0.5" />
      <circle cx="32" cy="32" r="24" fill="none" className={strokeClass} strokeWidth="0.5" />
    </svg>
  );
}
