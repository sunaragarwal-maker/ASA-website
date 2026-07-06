import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "../servicesData";
import { getIcon } from "../iconRegistry";
import BrandRing from "./BrandRing";
import { Button } from "./ui";

/**
 * Desktop "Services" dropdown. Click-to-open (not hover-only — hover
 * menus are unusable for keyboard and touch users) but also opens on
 * hover-intent from Navbar for mouse users, closes on Escape, an outside
 * click, or focus moving elsewhere, and returns focus to the trigger on
 * Escape so keyboard users don't lose their place.
 *
 * Positioned relative to <nav> (not the trigger button) so its width
 * isn't constrained by exactly where "Services" sits in the nav — see
 * Navbar.jsx, which sets position:relative on <nav> for this reason.
 */
export default function MegaMenu({ open, onClose, triggerRef }) {
  const panelRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }
    }
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target) && !triggerRef.current?.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose, triggerRef]);

  if (!open) return null;

  return (
    <div
      id="services-mega-menu"
      ref={panelRef}
      className="animate-menu-in absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[min(94vw,1040px)]
        rounded-2xl bg-surface shadow-lg border border-border p-7 z-50"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
          {serviceCategories.map((category) => {
            const Icon = getIcon(category.icon);
            const isActive = location.pathname === `/services/${category.slug}`;
            return (
              <Link
                key={category.slug}
                to={`/services/${category.slug}`}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-start gap-3 rounded-xl p-3 transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600
                  ${isActive ? "bg-gold-50" : "hover:bg-surface-alt"}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-150
                    group-hover:scale-105 motion-reduce:group-hover:scale-100
                    ${isActive ? "bg-gold-500" : "bg-navy-950"}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-navy-950" : "text-gold-400"}`} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-950">{category.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500 leading-snug">{category.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-xl bg-navy-950 p-5 lg:w-64 shrink-0 flex flex-col">
          <BrandRing size={200} className="absolute -right-10 -bottom-10 opacity-[0.12]" />
          <p className="relative text-gold-400 tracking-eyebrow text-xs font-semibold uppercase mb-2">
            Not Sure Where to Start?
          </p>
          <p className="relative text-sm text-ink-inverted-muted leading-relaxed grow">
            Tell us what&rsquo;s going on and we&rsquo;ll point you to the right service — or tell you
            plainly if it&rsquo;s simpler than you think.
          </p>
          <Button as={Link} to="/contact" onClick={onClose} size="sm" context="dark" className="relative mt-4">
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-border flex justify-end">
        <Link
          to="/services"
          onClick={onClose}
          className="text-sm font-medium text-gold-700 hover:text-gold-800 transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 rounded-sm"
        >
          View all services →
        </Link>
      </div>
    </div>
  );
}
