import { HeroSection } from "@/components/home/HeroSection";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ServicesHighlightSection } from "@/components/home/ServicesHighlightSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BlogSectionServer } from "@/components/home/BlogSectionServer";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Global Trade Made Simple - Import & Export Solutions",
    description:
      "Zexfro connects businesses with verified trade partners across Europe and beyond. Secure, compliant import and export services with end-to-end logistics support.",
    path: "",
    locale,
    image: "/home/hero.avif",
    keywords: [
      "global trade",
      "import export",
      "international trade platform",
      "verified trade partners",
      "European trade",
      "B2B marketplace",
      "trade compliance",
      "logistics solutions",
      "supply chain management",
      "cross-border trade",
    ],
  });
}

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
