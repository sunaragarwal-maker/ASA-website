import Eyebrow from "./Eyebrow";
import Heading from "./Heading";

/**
 * Eyebrow + H2 + optional subtext, the pattern every section on the
 * site opens with. Centered and capped at max-w-2xl by default (the
 * intro-blurb treatment used everywhere); pass align="left" for the
 * two-column sections (About, Founder's Message) that don't center it.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtext,
  tone = "onLight",
  align = "center",
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto max-w-2xl" : "text-left";
  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && <Eyebrow tone={tone === "onDark" ? "onDark" : "onLight"}>{eyebrow}</Eyebrow>}
      <Heading level={2} tone={tone}>
        {title}
      </Heading>
      {subtext && (
        <p className={`mt-4 ${tone === "onDark" ? "text-gray-300" : "text-ink-muted"}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
