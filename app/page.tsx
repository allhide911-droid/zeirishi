import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Profile from "./components/Profile";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Profile />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
