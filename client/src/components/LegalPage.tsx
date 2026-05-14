import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <LanguageProvider>
      <div className="bg-white min-h-screen">
        <Header />

      {/* Hero */}
      <section className="relative px-8 pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#001489]/50 text-[10px] tracking-[0.3em] uppercase font-semibold hover:text-[#001489] transition-colors mb-8"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                <path d="M11 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              Back to Home
            </Link>
            <h1 className="font-heading text-[#001489] font-bold text-[clamp(2rem,4vw,3.2rem)] tracking-tight leading-tight mb-4">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-[#001489]/35 text-xs tracking-wide">
                Last updated: {lastUpdated}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border border-[#E4E9F5] p-10 md:p-14"
          >
            <div className="max-w-[75ch] text-[#001489]/80 text-[15px] leading-[1.75]">
              {children}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>
    </LanguageProvider>
  );
}
