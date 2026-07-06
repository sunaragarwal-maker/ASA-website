import { Link } from "react-router-dom";
import { ArrowRight, Home as HomeIcon } from "lucide-react";
import BrandRing from "../components/BrandRing";
import Seo from "../components/Seo";
import { Container, Eyebrow, Heading, Button } from "../components/ui";

export default function NotFoundPage() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-40 pb-28 min-h-[70vh] flex items-center">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to the Anand Shyam & Associates homepage."
        path="/404"
        noindex
      />
      <BrandRing size={480} className="absolute -right-28 -top-28 opacity-[0.06]" />
      <Container className="relative text-center">
        <Eyebrow tone="onDark">Error 404</Eyebrow>
        <Heading level={1} tone="onDark">
          This Page Doesn&rsquo;t Add Up
        </Heading>
        <p className="mt-6 text-lg text-ink-inverted-muted max-w-xl mx-auto">
          The page you&rsquo;re looking for may have moved or no longer exists. Let&rsquo;s get you
          back to solid ground.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button as={Link} to="/">
            <HomeIcon className="w-4 h-4" />
            Back to Home
          </Button>
          <Button as={Link} to="/contact" variant="outline" context="dark">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
