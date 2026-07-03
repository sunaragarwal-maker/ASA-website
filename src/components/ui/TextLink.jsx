/**
 * Inline text link for use inside body copy (not nav, not a button).
 * No current content uses one, but this is the treatment to reach for
 * the first time a paragraph needs to link out mid-sentence.
 */
export default function TextLink({ as: Component = "a", className = "", children, ...props }) {
  return (
    <Component
      className={`text-navy-950 underline decoration-gold-500/50 underline-offset-4
        hover:decoration-gold-500 transition-colors duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white
        rounded-sm ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
