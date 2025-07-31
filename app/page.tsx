import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import PricingCalculator from '@/components/PricingCalculator';
import BlogSection from '@/components/BlogSection';
import AIUsageReport from '@/components/AIUsageReport';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b] text-white">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
      <PricingCalculator />
      <BlogSection />
      <AIUsageReport /> 

    </main>
  );
}
