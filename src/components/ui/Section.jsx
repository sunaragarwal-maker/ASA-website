import Container from "./Container";

/**
 * Standard section wrapper: responsive vertical rhythm + one of the
 * site's four background tones. Every page section should use this
 * instead of hand-writing `py-24 bg-*` (which was previously fixed at
 * a single value regardless of viewport).
 */
const tones = {
  light: "bg-surface dark:bg-navy-950",
  alt: "bg-surface-alt dark:bg-navy-900",
  dark: "bg-surface-dark",
  brand: "bg-brand",
};

export default function Section({
  id,
  tone = "light",
  className = "",
  containerClassName = "",
  children,
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${tones[tone]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
