/**
 * The bordered/shadowed box behind service cards, testimonial cards,
 * the founder quote panel, and the contact form. Three tones cover
 * every current use; `hoverLift` adds the shared hover treatment
 * (subtle raise + deeper shadow) for cards that act as a single click
 * target, and is left off for cards that just contain content (forms,
 * quote panels).
 */
const tones = {
  light: "bg-surface border border-border shadow-sm dark:bg-navy-900 dark:border-white/10 dark:shadow-none",
  muted: "bg-surface-alt border border-border dark:bg-navy-800 dark:border-white/10",
  dark: "bg-surface-dark text-white",
};

const radii = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

export default function Card({
  tone = "light",
  radius = "2xl",
  padding = "p-7",
  hoverLift = false,
  className = "",
  children,
  ...props
}) {
  const hoverClass = hoverLift
    ? "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
    : "";

  return (
    <div
      className={`${radii[radius]} ${tones[tone]} ${padding} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
