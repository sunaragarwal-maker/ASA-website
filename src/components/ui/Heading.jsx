/**
 * The three heading sizes used across the site, as one component
 * instead of the same text-3xl/md:text-4xl (etc.) string repeated at
 * every call site. `level` picks the visual size — it does not have
 * to match the semantic tag; pass `as` when the two need to differ
 * (e.g. an h3-sized heading that should still render as an <h2> for
 * outline correctness).
 */
const sizes = {
  1: "text-4xl md:text-5xl lg:text-6xl leading-tight",
  2: "text-3xl md:text-4xl",
  3: "text-lg",
};

const defaultTags = { 1: "h1", 2: "h2", 3: "h3" };

export default function Heading({ level = 2, as, tone = "onLight", className = "", children }) {
  const Component = as || defaultTags[level];
  const toneClass = tone === "onDark" ? "text-white" : "text-navy-950";
  return (
    <Component className={`font-serif ${sizes[level]} ${toneClass} ${className}`}>
      {children}
    </Component>
  );
}
