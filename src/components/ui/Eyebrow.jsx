/**
 * The small uppercase label above every section heading. Was
 * duplicated as `text-gold-600 tracking-[0.2em] text-xs font-semibold
 * uppercase mb-3` (or the -400/on-dark variant) seven times across the
 * codebase. Uses gold-700, not gold-600, on light backgrounds — gold-600
 * only hits 3.51:1 against white, short of WCAG AA's 4.5:1 for small text.
 */
export default function Eyebrow({ tone = "onLight", className = "", children }) {
  const toneClass = tone === "onDark" ? "text-gold-400" : "text-gold-700";
  return (
    <p
      className={`${toneClass} tracking-eyebrow text-xs font-semibold uppercase mb-3 ${className}`}
    >
      {children}
    </p>
  );
}
