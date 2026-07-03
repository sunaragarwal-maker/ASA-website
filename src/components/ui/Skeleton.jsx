/**
 * Loading placeholder. Nothing on the site currently fetches data
 * asynchronously, so this has no caller yet — it exists so the first
 * feature that does (a blog list, a live filing-status widget) has a
 * ready-made pulse treatment instead of inventing one under deadline.
 *
 * variant: "text" (a line, width varies by content) | "avatar"
 *   (circle) | "block" (card/image rectangle, give it a height via
 *   className)
 */
export default function Skeleton({ variant = "text", className = "" }) {
  if (variant === "avatar") {
    return <div className={`w-10 h-10 rounded-full bg-gray-200 animate-pulse ${className}`} />;
  }
  if (variant === "block") {
    return <div className={`rounded-2xl bg-gray-200 animate-pulse ${className}`} />;
  }
  return <div className={`h-4 rounded bg-gray-200 animate-pulse ${className}`} />;
}
