import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Trade Glossary - International Trade Terms & Definitions",
    description:
      "Comprehensive glossary of international trade terminology. Learn key terms like Bill of Lading, Incoterms, Letter of Credit, HS Code, FOB, CIF, and more.",
    path: "/glossary",
    locale,
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "trade glossary",
      "international trade terms",
      "import export terminology",
      "Incoterms definitions",
      "Bill of Lading",
      "trade definitions",
      "HS code meaning",
      "FOB CIF explained",
      "trade dictionary",
    ],
  });
}

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
