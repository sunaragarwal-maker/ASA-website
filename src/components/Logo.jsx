/**
 * The one brand mark used everywhere — header, footer, favicon (public/
 * favicon.svg mirrors this exactly), OG image. Previously the header/
 * footer used a generic Lucide "Landmark" icon while the favicon used
 * this monogram badge; two different marks for one firm undermined the
 * "consistent across every touchpoint" goal, so this replaces both.
 *
 * Kept as inline SVG (not an <img src="favicon.svg">) so it scales
 * crisply at any size and can pick up Tailwind's fill-* utilities like
 * any other element in the codebase, rather than hardcoded hex.
 */
export default function Logo({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Anand Shyam & Associates"
    >
      <circle cx="32" cy="32" r="31" className="fill-navy-950 stroke-gold-500" strokeWidth="2" />
      <text
        x="32"
        y="40"
        fontFamily="Georgia, serif"
        fontSize="20"
        fontWeight="600"
        textAnchor="middle"
        className="fill-gold-400"
      >
        ASA
      </text>
    </svg>
  );
}
