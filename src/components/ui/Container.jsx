/**
 * The single canonical content width for the site. Every section wraps
 * its content in this instead of repeating `max-w-6xl mx-auto px-6`.
 */
export default function Container({ as: Component = "div", className = "", children, ...props }) {
  return (
    <Component className={`max-w-6xl mx-auto px-6 ${className}`} {...props}>
      {children}
    </Component>
  );
}
