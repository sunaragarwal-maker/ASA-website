/**
 * Every clickable CTA on the site, in one place. `as` makes it
 * polymorphic — pass `Link` (react-router) for internal routes, "a"
 * for tel:/mailto:/external, or leave it as "button" for form submits.
 *
 * variant: "primary" (gold pill, the main CTA) | "dark" (solid navy,
 *   secondary CTA) | "outline" (bordered, transparent — works on
 *   light or dark via `context`) | "ghost" (text-only, hover tint)
 * size: "sm" | "md" | "lg"
 * context: "light" | "dark" — which background this sits on. Only
 *   affects the outline variant's border/text color and the focus
 *   ring's offset color; it's independent of `variant` because e.g.
 *   the "dark" solid button appears on both white and gold sections.
 */
const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants = {
  primary: "bg-gold-500 text-navy-950 hover:bg-gold-400",
  dark: "bg-navy-950 text-white hover:bg-navy-800",
  outline: {
    light: "border border-navy-950/20 text-navy-950 hover:border-navy-950/40",
    dark: "border border-white/25 text-white hover:border-gold-400 hover:text-gold-400",
  },
  ghost: {
    light: "text-navy-950 hover:text-gold-600",
    dark: "text-white hover:text-gold-400",
  },
};

const focusOffset = {
  light: "focus-visible:ring-offset-white",
  dark: "focus-visible:ring-offset-navy-950",
};

function Spinner({ className = "" }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V1.5A10.5 10.5 0 0 0 1.5 12H4Z"
      />
    </svg>
  );
}

export default function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  context = "light",
  loading = false,
  disabled = false,
  className = "",
  children,
  ...props
}) {
  const variantClass =
    typeof variants[variant] === "string" ? variants[variant] : variants[variant][context];

  const isDisabled = disabled || loading;

  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium
        transition-colors duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${focusOffset[context]}
        disabled:opacity-50 disabled:pointer-events-none
        ${sizes[size]} ${variantClass} ${className}`}
      aria-busy={loading || undefined}
      disabled={Component === "button" ? isDisabled : undefined}
      aria-disabled={Component !== "button" ? isDisabled : undefined}
      {...props}
    >
      {loading && <Spinner className="w-4 h-4" />}
      {children}
    </Component>
  );
}
