import { useEffect } from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import { firm } from "../content";

export default function Home() {
  useEffect(() => {
    document.title = `${firm.name} | Chartered Accountants`;
  }, []);

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
