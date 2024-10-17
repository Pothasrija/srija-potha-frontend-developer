import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Footer />
    </>
  );
}
