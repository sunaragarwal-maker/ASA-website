import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import { firm } from "../content";
import About from "../components/About";
import FirmValues from "../components/FirmValues";
import Credentials from "../components/Credentials";
import FounderMessage from "../components/FounderMessage";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import BrandRing from "../components/BrandRing";
import SealPattern from "../components/SealPattern";
import { Container, Eyebrow, Heading, Button } from "../components/ui";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="CA Anand Agarwal founded Anand Shyam & Associates on two decades of Chartered Accountancy experience in taxation, audit, and financial advisory."
        path="/about"
      />

      {/* HERO */}
      <section className="relative bg-navy-950 pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <SealPattern />
        <BrandRing size={480} className="absolute -right-28 -top-28 opacity-[0.06]" />
        <Container className="relative">
          <Breadcrumbs tone="dark" items={[{ label: "Home", path: "/" }, { label: "About", path: "/about" }]} />
          <div className="mt-8 max-w-2xl">
            <Eyebrow tone="onDark">About Us</Eyebrow>
            <Heading level={1} tone="onDark">
              The Personal Attention a Larger Firm Can&rsquo;t Give You
            </Heading>
            <p className="mt-6 text-lg text-ink-inverted-muted">
              Founded in {firm.yearFounded} by {firm.founder} on a simple idea — every client deserves
              the same care he&rsquo;d want for his own finances. Here&rsquo;s the firm that idea built.
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

      <About />
      <FirmValues />
      <Credentials />
      <FounderMessage />

      {/* FINAL CTA */}
      <section className="bg-navy-950 py-16 md:py-20">
        <Container className="text-center">
          <Heading level={2} tone="onDark" className="max-w-2xl mx-auto">
            Talk to the Person Whose Name Is on the Door
          </Heading>
          <p className="mt-4 text-ink-inverted-muted max-w-xl mx-auto">
            No call center, no junior associate — reach out and you&rsquo;ll hear from someone who&rsquo;s
            been doing this for twenty years.
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
    </>
  );
}
