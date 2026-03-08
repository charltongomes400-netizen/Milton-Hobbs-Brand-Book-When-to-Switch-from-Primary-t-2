import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Insights } from "@/components/sections/Insights";
import { Differentiators } from "@/components/sections/Differentiators";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="bg-[#001489] min-h-screen" data-testid="home-page">
        <Header />
        <main>
          <Hero />
          <Insights />
          <Differentiators />
          <PracticeAreas />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
