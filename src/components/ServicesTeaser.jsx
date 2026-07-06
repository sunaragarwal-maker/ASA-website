import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "../servicesData";
import { Section, SectionHeading, Button } from "./ui";
import ServiceCategoryCard from "./ServiceCategoryCard";

/**
 * Homepage preview of the Services ecosystem — a curated 4 of the 8
 * categories, not the full set (that's what /services is for). Without
 * this, a first-time visitor to the homepage never sees what the firm
 * actually does before being asked to book a consultation.
 */
export default function ServicesTeaser() {
  const featured = serviceCategories.slice(0, 4);

  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="What We Offer"
        title="One Firm for Every Number Your Business Touches"
        subtext="Eight practice areas, run by one accountable team — here are four to start with."
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((category) => (
          <ServiceCategoryCard key={category.slug} category={category} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button as={Link} to="/services" variant="outline">
          View All Services
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Section>
  );
}
