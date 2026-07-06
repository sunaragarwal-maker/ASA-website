import { Link } from "react-router-dom";
import { firm, navLinks, usefulLinks } from "../content";
import Logo from "./Logo";
import BrandRing from "./BrandRing";
import { Container, Divider } from "./ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 border-t border-border-dark pt-14 pb-8">
      <BrandRing size={360} className="absolute -right-20 -bottom-20 opacity-[0.05]" />

      <Container className="relative">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 text-white">
              <Logo size={28} />
              <span className="font-serif text-lg">{firm.name}</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Chartered Accountants providing taxation, audit, and financial
              advisory services since {firm.yearFounded}.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold-400 uppercase tracking-wide">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold-400 uppercase tracking-wide">
              Useful Links
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold-400 uppercase tracking-wide">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>{firm.phone}</li>
              <li>{firm.email}</li>
              <li>{firm.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6">
          <Divider tone="dark" />
          <p className="mt-6 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
