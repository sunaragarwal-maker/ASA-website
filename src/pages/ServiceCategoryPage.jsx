import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import { getServiceBySlug } from "../servicesData";
import { getIcon } from "../iconRegistry";
import { firm } from "../content";
import { Container, Section, SectionHeading, Button, Eyebrow, Heading } from "../components/ui";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import IconCard from "../components/IconCard";
import BrandRing from "../components/BrandRing";
import IndustryGrid from "../components/IndustryGrid";
import ProcessTimeline from "../components/ProcessTimeline";
import WhyChooseUsGrid from "../components/WhyChooseUsGrid";
import FAQAccordion from "../components/FAQAccordion";

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

  return (
    <div>
      <Seo
        title={category.metaTitle}
        description={category.metaDescription}
        path={`/services/${category.slug}`}
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
            <div className="relative md:col-span-2 flex items-center justify-center">
              <BrandRing size={320} className="absolute opacity-[0.1]" />
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center">
                <Icon className="w-16 h-16 md:w-20 md:h-20 text-gold-500/60" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <Section tone="light">
        <div className="max-w-3xl">
          <SectionHeading align="left" eyebrow="Overview" title={`How We Help With ${category.name}`} />
          <p className="mt-6 text-ink-muted leading-relaxed text-lg">{category.overview}</p>
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
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.benefits.map((benefit) => (
            <IconCard key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} />
          ))}
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
        <SectionHeading eyebrow="How It Works" title="Our Process" />
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
        </Container>
      </section>
    </div>
  );
}
