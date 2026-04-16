import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { HowItWorks } from "@/components/services/HowItWorks";
import { ServicesBenefits } from "@/components/services/ServicesBenefits";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return generatePageSEO({
    title: t("pageTitle"),
    description: t("pageDescription"),
    path: "/services",
    locale,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "trade services",
      "import export services",
      "logistics services",
      "customs clearance",
      "trade compliance",
      "supply chain management",
      "freight forwarding",
    ],
  });
}

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title={t("pageTitle")}
        description={t("pageDescription")}
        heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
      />
      <ServicesGrid />
      <HowItWorks />
      <ServicesBenefits />
      <ServicesCTA />
    </main>
  );
}
