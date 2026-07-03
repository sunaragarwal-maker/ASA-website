import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { serviceCategories } from "../servicesData";
import { getIcon } from "../iconRegistry";

/**
 * Desktop "Services" dropdown. Click-to-open (not hover-only — hover
 * menus are unusable for keyboard and touch users), closes on Escape or
 * an outside click, and returns focus to the trigger on close so
 * keyboard users don't lose their place.
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
      className="animate-menu-in absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[min(90vw,880px)]
        rounded-2xl bg-white shadow-lg border border-gray-100 p-6 z-50"
    >
      {/* Caret connecting the panel back to the trigger button */}
      <div
        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-gray-100"
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-2">
        {serviceCategories.map((category) => {
          const Icon = getIcon(category.icon);
          const isActive = location.pathname === `/services/${category.slug}`;
          return (
            <Link
              key={category.slug}
              to={`/services/${category.slug}`}
              onClick={onClose}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-start gap-3 rounded-xl p-3 transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600
                ${isActive ? "bg-gold-50" : "hover:bg-gray-50"}`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  isActive ? "bg-gold-500" : "bg-navy-950"
                }`}
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
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
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
