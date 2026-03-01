import { ScrollSection } from "@/components/Landing/ScrollSection";
import { Header } from "@/components/Landing/Header";
import { AboutSection } from "@/components/Landing/AboutSection";
import { CoreValuesSection } from "@/components/Landing/CoreValuesSection";
import { HowItWorksSection } from "@/components/Landing/HowItWorksSection";
import { CTASection } from "@/components/Landing/CTASection";
import { Footer } from "@/components/Landing/Footer";

export default function Home() {
  return (
    <main className="bg-[#E6E6E6] min-h-screen">
      <Header />
      <ScrollSection />
      <AboutSection />
      <CoreValuesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
