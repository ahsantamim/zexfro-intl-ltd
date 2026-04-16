import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Careers - Join Our Global Trade Team",
    description:
      "Explore career opportunities at Zexfro International Limited. Join a growing international trade company that values innovation, integrity, and professional development.",
    path: "/careers",
    locale,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "Zexfro careers",
      "trade company jobs",
      "international trade jobs",
      "import export careers",
      "logistics jobs Bangladesh",
      "Zexfro job openings",
      "trade industry careers",
    ],
  });
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
