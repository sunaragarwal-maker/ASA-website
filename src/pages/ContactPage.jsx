import { useEffect } from "react";
import Contact from "../components/Contact";
import { firm } from "../content";

export default function ContactPage() {
  useEffect(() => {
    document.title = `Contact Us | ${firm.name}`;
  }, []);

  return <Contact />;
}
