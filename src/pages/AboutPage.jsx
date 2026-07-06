import About from "../components/About";
import FounderMessage from "../components/FounderMessage";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { Container } from "../components/ui";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="CA Anand Agarwal founded Anand Shyam & Associates on two decades of Chartered Accountancy experience in taxation, audit, and financial advisory."
        path="/about"
      />
      <div className="pt-32 pb-4 bg-surface">
        <Container>
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "About", path: "/about" }]} />
        </Container>
      </div>
      <About />
      <FounderMessage />
    </>
  );
}
