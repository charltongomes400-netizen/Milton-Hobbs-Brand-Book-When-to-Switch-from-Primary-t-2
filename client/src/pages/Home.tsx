import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Differentiators } from "@/components/sections/Differentiators";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Insights } from "@/components/sections/Insights";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="bg-[#060B1F] min-h-screen" data-testid="home-page">
        <Header />
        <main>
          <Hero />
          <Differentiators />
          <PracticeAreas />
          <Insights />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
