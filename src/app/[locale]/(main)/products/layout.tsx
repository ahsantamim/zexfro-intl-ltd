import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Products - Import & Export Product Catalog",
    description:
      "Browse Zexfro's comprehensive range of import and export products. From electronics and machinery to garments and agricultural goods — connecting businesses across borders.",
    path: "/products",
    locale,
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "import products",
      "export products",
      "trade product catalog",
      "international goods",
      "wholesale products",
      "B2B product sourcing",
      "import export goods",
      "global product marketplace",
    ],
  });
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
