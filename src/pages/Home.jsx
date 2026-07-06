import Hero from "../components/Hero";
import TrustSignals from "../components/TrustSignals";
import ServicesTeaser from "../components/ServicesTeaser";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import Seo from "../components/Seo";
import IndustryGrid from "../components/IndustryGrid";
import ProcessTimeline from "../components/ProcessTimeline";
import { Section, SectionHeading } from "../components/ui";

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Anand Shyam & Associates is a Chartered Accountancy firm in Kolkata offering accounting, audit, taxation, GST, business registration, and advisory services."
        path="/"
      />
      <Hero />
      <TrustSignals />
      <ServicesTeaser />
      <WhyChooseUs />

      <Section tone="light">
        <SectionHeading
          eyebrow="Who We Work With"
          title="We Know How Your Industry Actually Runs"
          subtext="A trading company and a startup don't face the same filing deadlines or blind spots — we bring that context into every engagement, not a one-size template."
        />
        <div className="mt-14">
          <IndustryGrid />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="How It Works" title="From First Call to Ongoing Support" />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
