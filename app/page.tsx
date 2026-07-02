import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import InstagramSection from "@/components/InstagramSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WaveDivider variant="toWhite" />
        <Benefits />
        <Services />
        <Differentials />
        <BeforeAfterSection />
        <InstagramSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
