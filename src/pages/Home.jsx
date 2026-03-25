import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import How from "../components/How/How";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="packages">
        <How />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="cta">
        <CTA />
      </div>

      <Footer />
    </>
  );
}