import { HeroSection } from "@/components/home/HeroSection";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ServicesHighlightSection } from "@/components/home/ServicesHighlightSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BlogSectionServer } from "@/components/home/BlogSectionServer";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ServicesHighlightSection />
      <ProductCategoriesSection />
      <TestimonialsSection />
      <StatsSection />
      <BlogSectionServer />
      <FAQSection />
      <CTASection />
    </main>
  );
}
