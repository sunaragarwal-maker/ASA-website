import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, PhoneCall, BadgeCheck } from "lucide-react";
import { getServiceBySlug } from "../servicesData";
import { getIcon } from "../iconRegistry";
import { firm } from "../content";
import { Container, Section, SectionHeading, Button, Eyebrow, Heading, Card, TextLink } from "../components/ui";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import IconCard from "../components/IconCard";
import BenefitsPanel from "../components/BenefitsPanel";
import SealPattern from "../components/SealPattern";
import ServicesOrbit from "../components/ServicesOrbit";
import IndustryGrid from "../components/IndustryGrid";
import ProcessTimeline from "../components/ProcessTimeline";
import WhyChooseUsGrid from "../components/WhyChooseUsGrid";
import FAQAccordion from "../components/FAQAccordion";

const SITE_URL = "https://sunaragarwal-maker.github.io/ASA-website";

export default function ServiceCategoryPage() {
  const { slug } = useParams();
  const category = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const Icon = getIcon(category.icon);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.name,
    description: category.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: firm.name,
      telephone: firm.phone,
      email: firm.email,
      address: firm.address,
    },
    areaServed: "IN",
    url: `${SITE_URL}/services/${category.slug}`,
  };

  return (
    <div>
      <Seo
        title={category.metaTitle}
        description={category.metaDescription}
        path={`/services/${category.slug}`}
        jsonLd={serviceJsonLd}
      />

      {/* HERO */}
      <section className="relative bg-navy-950 pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <SealPattern />
        <Container className="relative">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: category.name, path: `/services/${category.slug}` },
            ]}
          />
          <div className="mt-8 grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <Eyebrow tone="onDark">{category.name}</Eyebrow>
              <Heading level={1} tone="onDark">
                {category.tagline}
              </Heading>
              <p className="mt-6 text-lg text-ink-inverted-muted max-w-xl">{category.heroSubtext}</p>
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
              <ServicesOrbit size={300} icon={Icon} />
            </div>
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <Section tone="light">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <SectionHeading align="left" eyebrow="Overview" title={`How We Help With ${category.name}`} />
            <p className="mt-6 text-ink-muted leading-relaxed text-lg">{category.overview}</p>
          </div>
          <div className="lg:col-span-2">
            <Card tone="muted" padding="p-6">
              <p className="text-sm font-semibold text-navy-950 uppercase tracking-wide mb-4">
                What&rsquo;s Covered
              </p>
              <ul className="space-y-3">
                {category.subServices.slice(0, 5).map((service) => (
                  <li key={service.title} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <BadgeCheck className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" aria-hidden="true" />
                    {service.title}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* INDIVIDUAL SERVICES */}
      <Section tone="alt">
        <SectionHeading eyebrow="What's Included" title="Individual Services" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.subServices.map((service) => (
            <IconCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </Section>

      {/* BENEFITS */}
      <Section tone="light">
        <SectionHeading eyebrow="Outcomes" title="What You Actually Get" />
        <div className="mt-14">
          <BenefitsPanel benefits={category.benefits} />
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Industries We Serve"
          subtext="Every industry has its own filing quirks and blind spots — we bring that context into the engagement."
        />
        <div className="mt-14">
          <IndustryGrid />
        </div>
      </Section>

      {/* PROCESS */}
      <Section tone="light">
        <SectionHeading
          eyebrow="How It Works"
          title="Our Process"
          subtext={`From your first call about ${category.name.toLowerCase()} to ongoing support after delivery — here's exactly what to expect.`}
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section tone="alt">
        <SectionHeading eyebrow="Why Us" title={`Why Choose ${firm.name}`} />
        <div className="mt-14">
          <WhyChooseUsGrid />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="light">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" align="left" />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion faqs={category.faqs} />
          <p className="mt-6 text-sm text-ink-muted">
            Didn&rsquo;t find your answer?{" "}
            <TextLink as={Link} to="/contact">
              Ask us directly
            </TextLink>{" "}
            — most questions take one short call to settle.
          </p>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-navy-950 py-16 md:py-20">
        <Container className="text-center">
          <Heading level={2} tone="onDark" className="max-w-2xl mx-auto">
            Ready to talk about {category.name.toLowerCase()}?
          </Heading>
          <p className="mt-4 text-ink-inverted-muted max-w-xl mx-auto">
            A direct conversation, not a sales pitch — we'll tell you plainly what applies to your
            situation and what it will cost.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button as={Link} to="/contact">
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button as="a" href={`tel:${firm.phone.replace(/\s/g, "")}`} variant="outline" context="dark">
              <PhoneCall className="w-4 h-4" />
              {firm.phone}
            </Button>
          </div>
          <p className="mt-4 text-sm text-ink-inverted-muted">
            Free initial consultation &middot; No obligation &middot; We respond within one business day
          </p>
        </Container>
      </section>
    </div>
  );
}
