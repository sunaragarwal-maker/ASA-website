import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { firm } from "../content";
import { serviceCategories } from "../servicesData";
import { getIcon } from "../iconRegistry";
import MegaMenu from "./MegaMenu";
import Logo from "./Logo";
import { Button } from "./ui";

// Hover-intent delays: long enough that a mouse just passing over the
// trigger on its way elsewhere doesn't flash the menu open, short enough
// that deliberately hovering it still feels instant. Closing has a longer
// delay than opening so moving the mouse diagonally from the trigger down
// into the panel doesn't get read as "left the menu."
const HOVER_OPEN_DELAY = 120;
const HOVER_CLOSE_DELAY = 250;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesTriggerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const hoverTimerRef = useRef(null);
  const location = useLocation();

  const servicesActive = location.pathname.startsWith("/services");

  const clearHoverTimer = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const handleServicesMouseEnter = () => {
    clearHoverTimer();
    hoverTimerRef.current = setTimeout(() => setMegaOpen(true), HOVER_OPEN_DELAY);
  };

  const handleServicesMouseLeave = () => {
    clearHoverTimer();
    hoverTimerRef.current = setTimeout(() => setMegaOpen(false), HOVER_CLOSE_DELAY);
  };

  // A keyboard user tabbing through the trigger and the panel should close
  // it the moment focus actually leaves that group — Escape and outside
  // click (handled inside MegaMenu) cover pointer users, but neither fires
  // when focus just moves on to "Contact" via Tab.
  const handleServicesBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      clearHoverTimer();
      setMegaOpen(false);
    }
  };

  // Subtle depth cue once the page scrolls — the header itself stays a
  // solid navy at all times (a transparent-until-scroll header was tried
  // earlier and reverted: it made nav text invisible on every page whose
  // top section isn't dark, which is every page but Home).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close both menus on any route change (covers link clicks, but also
  // browser back/forward, which a click handler alone wouldn't catch).
  useEffect(() => {
    clearHoverTimer();
    setOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => clearHoverTimer, []);

  // While the mobile menu is open: lock background scroll, and mark the
  // rest of the page inert so Tab can't reach content sitting behind the
  // scrim (visually dimmed, but not focus-trapped by default).
  useEffect(() => {
    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");
    const whatsapp = document.getElementById("whatsapp-button");
    const elements = [main, footer, whatsapp].filter(Boolean);

    document.body.style.overflow = open ? "hidden" : "";
    elements.forEach((el) => {
      el.inert = open;
    });

    return () => {
      document.body.style.overflow = "";
      elements.forEach((el) => {
        el.inert = false;
      });
    };
  }, [open]);

  // Escape closes the mobile menu too, returning focus to the toggle
  // button so keyboard users don't lose their place.
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative inline-block py-1.5 transition-colors hover:text-gold-400 ${isActive ? "text-gold-400" : ""}
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-sm
    after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-gold-400
    after:origin-center after:transition-transform after:duration-200 motion-reduce:after:transition-none
    ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`;

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-navy-950/95 backdrop-blur transition-shadow duration-300
        ${scrolled ? "shadow-lg" : "shadow-none"}`}
    >
      {open && (
        <div
          aria-hidden="true"
          onClick={closeMobileMenu}
          className="md:hidden fixed inset-0 bg-navy-950/60 animate-panel-in"
        />
      )}

      <nav
        className={`relative max-w-6xl mx-auto flex items-center justify-between px-6 transition-[padding] duration-300
          ${scrolled ? "py-3" : "py-4"}`}
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-white group rounded-sm
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        >
          <Logo
            size={32}
            className="transition-transform duration-200 group-hover:scale-110 motion-reduce:group-hover:scale-100"
          />
          <span className="font-serif text-lg tracking-wide transition-colors group-hover:text-gold-100">
            {firm.name}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
            onBlur={handleServicesBlur}
          >
            <button
              ref={servicesTriggerRef}
              type="button"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              aria-controls="services-mega-menu"
              onClick={() => {
                clearHoverTimer();
                setMegaOpen((v) => !v);
              }}
              className={`relative flex items-center gap-1 py-1.5 transition-colors hover:text-gold-400
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-sm
                after:content-[''] after:absolute after:left-0 after:right-4 after:-bottom-0.5 after:h-px after:bg-gold-400
                after:origin-center after:transition-transform after:duration-200 motion-reduce:after:transition-none
                ${servicesActive ? "text-gold-400 after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 motion-reduce:transition-none ${
                  megaOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} triggerRef={servicesTriggerRef} />
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        <Button as={Link} to="/contact" size="sm" context="dark" className="hidden md:inline-flex">
          Book a Consultation
        </Button>

        <button
          ref={menuButtonRef}
          className="md:hidden text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 rounded-sm"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav-panel"
          className="relative animate-panel-in md:hidden bg-navy-950 px-6 pb-6 max-h-[calc(100dvh-5rem)] overflow-y-auto"
        >
          <ul className="flex flex-col gap-4 text-gray-200">
            <li>
              <NavLink to="/" end className={linkClass} onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass} onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-submenu"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`w-full flex items-center justify-between py-1.5 hover:text-gold-400 transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 rounded-sm
                  ${servicesActive ? "text-gold-400" : ""}`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 motion-reduce:transition-none ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none
                  ${mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <ul id="mobile-services-submenu" className="mt-3 ml-3 space-y-3 border-l border-white/10 pl-4 pb-1">
                    {serviceCategories.map((category) => {
                      const Icon = getIcon(category.icon);
                      return (
                        <li key={category.slug}>
                          <Link
                            to={`/services/${category.slug}`}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2.5 py-1 text-sm text-gray-300 hover:text-gold-400 transition-colors"
                          >
                            <Icon className="w-4 h-4 shrink-0 text-gold-500/70" aria-hidden="true" />
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <Link
                        to="/services"
                        onClick={closeMobileMenu}
                        className="block py-1 text-sm font-medium text-gold-400"
                      >
                        View all services →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass} onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
          <Button
            as={Link}
            to="/contact"
            onClick={closeMobileMenu}
            size="sm"
            context="dark"
            className="mt-4"
          >
            Book a Consultation
          </Button>
        </div>
      )}
    </header>
  );
}
