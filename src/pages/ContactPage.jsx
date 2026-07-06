import Contact from "../components/Contact";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { Container } from "../components/ui";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Anand Shyam & Associates, Chartered Accountants in Kolkata, for a consultation on tax, audit, or compliance."
        path="/contact"
      />
      <div className="pt-32 pb-4 bg-surface">
        <Container>
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Contact", path: "/contact" }]} />
        </Container>
      </div>
      <Contact />
    </>
  );
}
