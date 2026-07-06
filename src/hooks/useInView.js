import { useEffect, useRef, useState } from "react";

// Generous enough that ordinary fast scrolling (Page Down, dragging the
// scrollbar, arrow-key jumps) still catches the transient intersection
// instead of skipping straight past a section before the observer has a
// chance to fire.
const ROOT_MARGIN = "200px 0px 200px 0px";
const THRESHOLD = 0;

/**
 * Fires once, the first time the returned ref's element crosses the
 * viewport threshold, then disconnects — used to trigger a one-shot
 * scroll-reveal rather than re-animating every time an element scrolls
 * in and out of view. Falls back to "already in view" if
 * IntersectionObserver isn't available, so content is never stuck
 * invisible.
 */
export default function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setInView(true);
      observer.disconnect();
      window.removeEventListener("scroll", checkMissed);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
    );
    observer.observe(node);

    // Safety net for scrolling fast enough to skip the transient
    // intersection entirely (found testing large Page-Down-style jumps):
    // if the element's bottom edge has already passed above the
    // viewport without ever triggering, reveal it immediately rather
    // than leaving it stuck invisible behind the user's current scroll
    // position. Tied to actual scroll position, not a blind timer, so it
    // never reveals content the user hasn't scrolled anywhere near yet.
    function checkMissed() {
      if (node.getBoundingClientRect().bottom < 0) reveal();
    }
    window.addEventListener("scroll", checkMissed, { passive: true });

    return () => {
      done = true;
      observer.disconnect();
      window.removeEventListener("scroll", checkMissed);
    };
  }, []);

  return [ref, inView];
}
