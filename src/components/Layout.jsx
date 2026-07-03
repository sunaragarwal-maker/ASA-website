import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]
          focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-navy-950"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
