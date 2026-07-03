import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import { serviceCategories, landingFaqs } from "../servicesData";
import { firm } from "../content";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceCategoryCard from "../components/ServiceCategoryCard";
import IndustryGrid from "../components/IndustryGrid";
import ProcessTimeline from "../components/ProcessTimeline";
import WhyChooseUsGrid from "../components/WhyChooseUsGrid";
import FAQAccordion from "../components/FAQAccordion";

export default function ServicesPage() {
  return (
    <div>
      <Seo
        title="Services"
        description="Accounting, audit, taxation, business registration, advisory, payroll, finance, and specialized professional services from Anand Shyam & Associates."
        path="/services"
      />

      {/* HERO */}
      <section className="relative bg-navy-950 pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-gold-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-500) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <Container className="relative">
          <Breadcrumbs tone="dark" items={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]} />
          <div className="mt-8 max-w-2xl">
            <p className="text-gold-400 tracking-eyebrow text-xs font-medium uppercase mb-4">
              What We Offer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-white">
              One Firm for Every Number Your Business Touches
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Eight practice areas, run by one team that knows your full financial picture — from
              the first bookkeeping entry to the audit report a bank asks for years later.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button as={Link} to="/contact">
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button as="a" href={`tel:${firm.phone.replace(/\s/g, "")}`} variant="outline" context="dark">
                <PhoneCall className="w-4 h-4" />
                {firm.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CATEGORY CARDS */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Our Practice Areas"
          title="Eight Areas, One Accountable Team"
          subtext="Pick the one closest to what's on your mind — every page goes into real detail, not just a paragraph."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Section>

      {/* INDUSTRY EXPERTISE */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Industry Expertise"
          title="We Speak the Language of Your Business"
          subtext="Compliance looks different for a manufacturer than for a startup. We bring that context into every engagement."
        />
        <div className="mt-14">
          <IndustryGrid />
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section tone="light">
        <SectionHeading eyebrow="Why Us" title={`Why Choose ${firm.name}`} />
        <div className="mt-14">
          <WhyChooseUsGrid />
        </div>
      </Section>

      {/* PROCESS */}
      <Section tone="alt">
        <SectionHeading eyebrow="How It Works" title="Our Process" />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="light">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" align="left" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion faqs={landingFaqs} />
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-navy-950 py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white max-w-2xl mx-auto">
            Not sure where to start? That's what the first call is for.
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Tell us what's on your plate — we'll tell you plainly what applies and what it costs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button as={Link} to="/contact">
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
