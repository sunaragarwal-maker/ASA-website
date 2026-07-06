import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { firm } from "../content";
import BrandRing from "./BrandRing";
import { Section, Eyebrow, Heading, Button } from "./ui";

/**
 * Compact founder-credibility strip for the homepage — distinct from the
 * full letter in FounderMessage (which lives on /about) so the two pages
 * don't repeat the same paragraph. A visitor should see who's behind the
 * firm before being asked to book a consultation, not only after
 * navigating to About.
 */
export default function FounderTeaser() {
  return (
    <Section tone="light">
      <div className="grid md:grid-cols-5 gap-14 items-center">
        <div className="md:col-span-2 flex md:justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
            <BrandRing size={160} className="absolute opacity-[0.18]" />
            <span className="relative font-serif text-4xl text-gold-500/70" aria-hidden="true">
              {firm.founderInitials}
            </span>
          </div>
        </div>

        <div className="md:col-span-3">
          <Eyebrow>Led By Experience</Eyebrow>
          <Heading level={2}>Meet {firm.founder}</Heading>
          <p className="mt-4 text-ink-muted leading-relaxed">
            A Fellow Chartered Accountant with over {new Date().getFullYear() - firm.yearFounded} years advising
            individuals and businesses on taxation, audit, and financial strategy — every engagement at {firm.name}{" "}
            still gets his personal attention.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-gold-700 shrink-0" aria-hidden="true" />
            <p className="text-sm text-ink-muted">{firm.founderCreds}, Institute of Chartered Accountants of India</p>
          </div>
          <div className="mt-7">
            <Button as={Link} to="/about" variant="ghost">
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
