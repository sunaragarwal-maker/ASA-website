import { useEffect } from "react";
import About from "../components/About";
import FounderMessage from "../components/FounderMessage";
import { firm } from "../content";

export default function AboutPage() {
  useEffect(() => {
    document.title = `About Us | ${firm.name}`;
  }, []);

  return (
    <>
      <About />
      <FounderMessage />
    </>
  );
}
