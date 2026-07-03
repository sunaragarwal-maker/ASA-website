import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SITE_URL = "https://sunaragarwal-maker.github.io/ASA-website";

/**
 * Visual breadcrumb trail + BreadcrumbList structured data. `items` is the
 * full trail including the current page last (rendered as plain text, not
 * a link, per WCAG "don't link the current page" guidance).
 */
export default function Breadcrumbs({ items, tone = "light" }) {
  const isDark = tone === "dark";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb">
        <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          {items.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  className={`w-3.5 h-3.5 ${isDark ? "text-white/20" : "text-gray-300"}`}
                  aria-hidden="true"
                />
              )}
              {i === items.length - 1 ? (
                <span aria-current="page" className={`font-medium ${isDark ? "text-white" : "text-navy-950"}`}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`transition-colors ${isDark ? "hover:text-gold-400" : "hover:text-gold-700"}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
