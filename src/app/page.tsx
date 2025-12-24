import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Doctors from "@/components/sections/Doctors";
import Technology from "@/components/sections/Technology";
import Promo from "@/components/sections/Promo";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Doctors />
      <Technology />
      <Promo />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
