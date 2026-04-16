import { routing } from "@/i18n/routing";
import { generatePageSEO } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return generatePageSEO({
    title: "Logistics & Supply Chain Management",
    description:
      "Comprehensive logistics and supply chain management solutions from global sourcing to last-mile delivery. International freight, customs brokerage, warehousing, and B2B distribution services.",
    path: "/logistic-supply-chain",
    locale,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "logistics",
      "supply chain management",
      "international freight",
      "customs brokerage",
      "warehousing",
      "last-mile delivery",
      "B2B distribution",
    ],
  });
}

export default function LogisticSupplyChainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
