import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FounderMessage from "./components/FounderMessage";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FounderMessage />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
