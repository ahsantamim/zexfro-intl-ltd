import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "About Us - Our Story & Mission in Global Trade",
    description:
      "Learn about Zexfro International Limited — our journey since 2018, our commitment to quality, verified trade partnerships, and how we simplify global commerce for businesses worldwide.",
    path: "/about",
    locale,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "about Zexfro",
      "international trade company",
      "global trade partner",
      "import export company Bangladesh",
      "verified trade partnerships",
      "Zexfro International Limited",
      "trade company history",
      "B2B trade platform",
    ],
  });
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
