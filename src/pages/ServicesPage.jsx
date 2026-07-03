import { useEffect } from "react";
import Services from "../components/Services";
import CTABanner from "../components/CTABanner";
import { firm } from "../content";

export default function ServicesPage() {
  useEffect(() => {
    document.title = `Services | ${firm.name}`;
  }, []);

  return (
    <>
      <Services />
      <CTABanner />
    </>
  );
}
