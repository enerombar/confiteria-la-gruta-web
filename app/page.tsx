import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import ScrollToTopOnReload from "@/components/ScrollToTopOnReload";

export default function Home() {
  return (
    <main>
      <ScrollToTopOnReload />
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
