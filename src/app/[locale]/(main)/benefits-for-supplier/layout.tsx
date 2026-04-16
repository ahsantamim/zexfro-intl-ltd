import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Benefits for Suppliers - Grow Your Business Globally",
    description:
      "Discover the advantages of partnering with Zexfro as a supplier. Access global markets, secure payments, logistics support, and dedicated account management for your export business.",
    path: "/benefits-for-supplier",
    locale,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "supplier benefits",
      "export partner advantages",
      "global market access",
      "supplier partnership",
      "trade supplier program",
      "secure trade payments",
      "export growth opportunities",
    ],
  });
}

export default function BenefitsForSupplierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
