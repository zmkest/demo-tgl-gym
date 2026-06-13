import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Benefits />
        <Pricing />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
