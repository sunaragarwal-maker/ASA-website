import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ctaBanner } from "../content";
import { Container, Button, Heading } from "./ui";

export default function CTABanner() {
  return (
    <section className="bg-brand py-14">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Heading level={2} className="flex items-center justify-center md:justify-start gap-2">
            <MessageCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
            {ctaBanner.heading}
          </Heading>
          <p className="mt-4 text-navy-900/80 max-w-xl">{ctaBanner.subtext}</p>
        </div>
        <Button as={Link} to="/contact" variant="dark" className="shrink-0">
          Book a Consultation
          <ArrowRight className="w-4 h-4" />
        </Button>
      </Container>
    </section>
  );
}
