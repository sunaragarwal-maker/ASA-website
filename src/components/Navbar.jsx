import { useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Landmark, ChevronDown } from "lucide-react";
import { firm } from "../content";
import { serviceCategories } from "../servicesData";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesTriggerRef = useRef(null);
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    `hover:text-gold-400 transition-colors ${isActive ? "text-gold-400" : ""}`;

  const servicesActive = location.pathname.startsWith("/services");

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-950/95 backdrop-blur shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Landmark className="w-6 h-6 text-gold-500" />
          <span className="font-serif text-lg tracking-wide">{firm.name}</span>
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
          <li className="relative">
            <button
              ref={servicesTriggerRef}
              type="button"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              aria-controls="services-mega-menu"
              onClick={() => setMegaOpen((v) => !v)}
              className={`flex items-center gap-1 transition-colors hover:text-gold-400
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 rounded-sm
                ${servicesActive ? "text-gold-400" : ""}`}
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

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gold-500 px-5 py-2 text-sm font-medium text-navy-950 hover:bg-gold-400 transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        >
          Book a Consultation
        </Link>

        <button
          className="md:hidden text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 rounded-sm"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-950 px-6 pb-6">
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
                className={`w-full flex items-center justify-between hover:text-gold-400 transition-colors
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
              {mobileServicesOpen && (
                <ul id="mobile-services-submenu" className="mt-3 ml-3 space-y-3 border-l border-white/10 pl-4">
                  {serviceCategories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        to={`/services/${category.slug}`}
                        onClick={closeMobileMenu}
                        className="block text-sm text-gray-300 hover:text-gold-400 transition-colors"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/services"
                      onClick={closeMobileMenu}
                      className="block text-sm font-medium text-gold-400"
                    >
                      View all services →
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/contact" className={linkClass} onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="mt-4 inline-flex items-center rounded-full bg-gold-500 px-5 py-2 text-sm font-medium text-navy-950"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
