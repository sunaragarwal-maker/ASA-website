import { useEffect, useState } from "react";
import { Menu, X, Landmark } from "lucide-react";
import { firm, navLinks } from "../content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-navy-950/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Landmark className="w-6 h-6 text-gold-500" />
          <span className="font-serif text-lg tracking-wide">{firm.name}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gold-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gold-500 px-5 py-2 text-sm font-medium text-navy-950 hover:bg-gold-400 transition-colors"
        >
          Book a Consultation
        </a>

        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-950 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-gray-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 hover:text-gold-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center rounded-full bg-gold-500 px-5 py-2 text-sm font-medium text-navy-950"
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
}
