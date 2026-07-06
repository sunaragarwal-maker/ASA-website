/**
 * Initials circle used on testimonials (and anywhere else a client/
 * team member needs a placeholder avatar without a real photo). Carries
 * the same thin gold ring as the logo mark itself, so every circular
 * "monogram in navy" moment on the site reads as one family.
 */
const sizes = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-lg",
};

const initialsOf = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Avatar({ name, size = "md", className = "" }) {
  return (
    <div
      className={`${sizes[size]} rounded-full bg-navy-950 ring-1 ring-inset ring-gold-500/40 flex items-center justify-center shrink-0 ${className}`}
    >
      <span className="text-gold-400 font-serif">{initialsOf(name)}</span>
    </div>
  );
}
