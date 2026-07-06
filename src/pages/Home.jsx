import Hero from "../components/Hero";
import ServicesTeaser from "../components/ServicesTeaser";
import WhyChooseUs from "../components/WhyChooseUs";
import FounderTeaser from "../components/FounderTeaser";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Anand Shyam & Associates is a Chartered Accountancy firm in Kolkata offering accounting, audit, taxation, GST, business registration, and advisory services."
        path="/"
      />
      <Hero />
      <ServicesTeaser />
      <WhyChooseUs />
      <FounderTeaser />
      <Testimonials />
      <CTABanner />
    </>
  );
}
