import { useEffect } from "react";

const SITE_URL = "https://sunaragarwal-maker.github.io/ASA-website";

function upsertMeta(selector, create) {
  let el = document.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

/**
 * Per-route document title, meta description, canonical URL, and OG/Twitter
 * tags, plus an optional JSON-LD block (used for FAQPage schema on service
 * pages). Deliberately not a dependency like react-helmet — this is a
 * client-only SPA with a handful of simple tag updates, and Google's
 * crawler does execute JS and will see these. Social-media link-unfurling
 * bots do not run JS and will only ever see index.html's static OG tags —
 * see DESIGN_SYSTEM.md for that tradeoff.
 */
export default function Seo({ title, description, path = "/", jsonLd }) {
  useEffect(() => {
    const fullTitle = `${title} | Anand Shyam & Associates`;
    document.title = fullTitle;

    const descMeta = upsertMeta('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.name = "description";
      return m;
    });
    descMeta.content = description;

    const canonical = upsertMeta('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.rel = "canonical";
      return l;
    });
    canonical.href = `${SITE_URL}${path}`;

    const ogTitle = upsertMeta('meta[property="og:title"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    });
    ogTitle.content = fullTitle;

    const ogDesc = upsertMeta('meta[property="og:description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    });
    ogDesc.content = description;

    const ogUrl = upsertMeta('meta[property="og:url"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    });
    ogUrl.content = `${SITE_URL}${path}`;

    let script;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (script) script.remove();
    };
  }, [title, description, path, jsonLd]);

  return null;
}
