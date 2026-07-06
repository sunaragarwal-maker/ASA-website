import useInView from "../../hooks/useInView";
import Eyebrow from "./Eyebrow";
import Heading from "./Heading";

/**
 * Eyebrow + H2 + optional subtext, the pattern every section on the
 * site opens with. Centered and capped at max-w-2xl by default (the
 * intro-blurb treatment used everywhere); pass align="left" for the
 * two-column sections (About, Founder's Message) that don't center it.
 *
 * Fades and rises into place the first time it scrolls into view —
 * every section on the site opens with this component, so this is the
 * one place to give the whole site scroll motion instead of every
 * section just appearing instantly with no transition at all.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtext,
  tone = "onLight",
  align = "center",
  className = "",
}) {
  const [ref, inView] = useInView();
  const alignClass = align === "center" ? "text-center mx-auto max-w-2xl" : "text-left";
  return (
    <div
      ref={ref}
      className={`${alignClass} ${className} transition-all duration-700 ease-out motion-reduce:transition-none
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {eyebrow && <Eyebrow tone={tone === "onDark" ? "onDark" : "onLight"}>{eyebrow}</Eyebrow>}
      <Heading level={2} tone={tone}>
        {title}
      </Heading>
      {subtext && (
        <p className={`mt-4 ${tone === "onDark" ? "text-ink-inverted-muted" : "text-ink-muted"}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
