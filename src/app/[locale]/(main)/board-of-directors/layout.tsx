import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Board of Directors - Leadership Team",
    description:
      "Meet the experienced leadership team at Zexfro International Limited. Our board of directors brings decades of expertise in international trade, logistics, and business management.",
    path: "/board-of-directors",
    locale,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "Zexfro leadership",
      "board of directors",
      "trade company management",
      "Zexfro team",
      "corporate governance",
      "international trade leaders",
    ],
  });
}

export default function BoardOfDirectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
