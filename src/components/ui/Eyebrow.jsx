/**
 * The small uppercase label above every section heading. Was
 * duplicated as `text-gold-600 tracking-[0.2em] text-xs font-semibold
 * uppercase mb-3` (or the -400/on-dark variant) seven times across
 * the codebase.
 */
export default function Eyebrow({ tone = "onLight", className = "", children }) {
  const toneClass = tone === "onDark" ? "text-gold-400" : "text-gold-600";
  return (
    <p
      className={`${toneClass} tracking-eyebrow text-xs font-semibold uppercase mb-3 ${className}`}
    >
      {children}
    </p>
  );
}
