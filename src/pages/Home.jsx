import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
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
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
