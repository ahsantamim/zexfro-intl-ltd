import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Vision, Mission & Core Values",
    description:
      "Discover Zexfro's vision for global trade excellence, our mission to simplify international commerce, and the core values of integrity, innovation, and customer-centricity that drive us.",
    path: "/vision-mission-values",
    locale,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "Zexfro vision",
      "company mission",
      "core values",
      "trade excellence",
      "business integrity",
      "global commerce vision",
      "customer-centric trade",
    ],
  });
}

export default function VisionMissionValuesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
