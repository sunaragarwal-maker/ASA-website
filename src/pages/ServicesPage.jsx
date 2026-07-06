import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import { serviceCategories, landingFaqs } from "../servicesData";
import { firm } from "../content";
import { Container, Section, SectionHeading, Button, Eyebrow, Heading } from "../components/ui";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceCategoryCard from "../components/ServiceCategoryCard";
import IndustryGrid from "../components/IndustryGrid";
import ProcessTimeline from "../components/ProcessTimeline";
import WhyChooseUsGrid from "../components/WhyChooseUsGrid";
import FAQAccordion from "../components/FAQAccordion";
import BrandRing from "../components/BrandRing";
import SealPattern from "../components/SealPattern";
import ServicesOrbit from "../components/ServicesOrbit";

const coreServices = serviceCategories.slice(0, 4);
const specializedServices = serviceCategories.slice(4);

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
        <SealPattern />
        <BrandRing size={480} className="absolute -right-28 -top-28 opacity-[0.06]" />
        <Container className="relative">
          <Breadcrumbs tone="dark" items={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]} />
          <div className="mt-8 grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <Eyebrow tone="onDark">What We Offer</Eyebrow>
              <Heading level={1} tone="onDark">
                One Firm for Every Number Your Business Touches
              </Heading>
              <p className="mt-6 text-lg text-ink-inverted-muted max-w-xl">
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
            <div className="hidden md:flex md:col-span-2 items-center justify-center">
              <ServicesOrbit size={300} />
            </div>
          </div>
        </Container>
      </section>

      {/* CATEGORY CARDS — the main event; educate on what's on offer first */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Our Practice Areas"
          title="Eight Areas, One Accountable Team"
          subtext="Pick the one closest to what's on your mind — every page goes into real detail, not just a paragraph."
        />

        <div className="mt-14">
          <p className="text-sm font-semibold text-navy-950 uppercase tracking-wide pb-3 border-b border-border">
            Core Compliance &amp; Accounting
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((category, i) => (
              <ServiceCategoryCard key={category.slug} category={category} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="text-sm font-semibold text-navy-950 uppercase tracking-wide pb-3 border-b border-border">
            Specialized &amp; Advisory Services
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((category, i) => (
              <ServiceCategoryCard key={category.slug} category={category} index={i + 4} />
            ))}
          </div>
        </div>
      </Section>

      {/* INDUSTRY EXPERTISE — who this applies to */}
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

      {/* PROCESS — how engagement actually works */}
      <Section tone="light">
        <SectionHeading eyebrow="How It Works" title="Our Process" />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      {/* WHY CHOOSE US — now that the visitor understands what/how, why this firm */}
      <Section tone="alt">
        <SectionHeading eyebrow="Why Us" title={`Why Choose ${firm.name}`} />
        <div className="mt-14">
          <WhyChooseUsGrid />
        </div>
      </Section>

      {/* FAQ — last doubts, right before the ask */}
      <Section tone="light">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" align="left" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion faqs={landingFaqs} />
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-navy-950 py-16 md:py-20">
        <Container className="text-center">
          <Heading level={2} tone="onDark" className="max-w-2xl mx-auto">
            Not sure where to start? That's what the first call is for.
          </Heading>
          <p className="mt-4 text-ink-inverted-muted max-w-xl mx-auto">
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
