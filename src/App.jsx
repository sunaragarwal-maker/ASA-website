import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Logo from "./components/Logo";

// Route-level code splitting: each page is its own chunk, so the initial
// bundle only pays for Home + the app shell. This matters more now that
// the site has grown from 4 pages to 12+ (8 service category pages).
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceCategoryPage = lazy(() => import("./pages/ServiceCategoryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DesignSystemPage = lazy(() => import("./pages/DesignSystemPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-busy="true" aria-live="polite">
      <Logo size={40} className="animate-pulse motion-reduce:animate-none" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/ASA-website">
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceCategoryPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* Internal reference only — deliberately not in navLinks. */}
            <Route path="design-system" element={<DesignSystemPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
