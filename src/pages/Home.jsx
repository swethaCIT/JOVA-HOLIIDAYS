import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import How from "../components/How/How";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <How />
      <Testimonials />
      <CTA />
    </>
  );
}