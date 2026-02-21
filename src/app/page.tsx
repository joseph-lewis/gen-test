import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AppShowcase from "@/components/sections/AppShowcase";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import LeadCapture from "@/components/sections/LeadCapture";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <AppShowcase />
      <Services />
      <Testimonials />
      <LeadCapture />
    </main>
  );
}
