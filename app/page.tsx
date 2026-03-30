import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Featured from "@/components/Featured";
import Gallery from "@/components/Gallery";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Featured />
      <Gallery />
      <Banner />
      <Contact />
      <Footer />
    </main>
  );
}
