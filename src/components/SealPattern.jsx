/**
 * Faint tiled ring motif for dark hero sections — a small stroke-only
 * circle, echoing the logo's own seal geometry, repeated at low opacity.
 * Replaces a generic crossed-line grid that carried no connection to the
 * brand mark. The hex below mirrors --color-gold-500; kept literal
 * because it's baked into an SVG data URI, which can't reference a CSS
 * custom property the way a plain gradient can.
 */
const RING_TILE = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">' +
    '<circle cx="32" cy="32" r="20" fill="none" stroke="#c9a227" stroke-width="1"/>' +
    "</svg>"
);

export default function SealPattern({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.05] ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,${RING_TILE}")`,
        backgroundSize: "64px 64px",
      }}
    />
  );
}
