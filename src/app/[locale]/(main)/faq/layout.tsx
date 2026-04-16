import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "FAQ - Frequently Asked Questions About Global Trade",
    description:
      "Find answers to common questions about Zexfro's import and export services, trade compliance, shipping, payment methods, and how to start trading with us.",
    path: "/faq",
    locale,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "trade FAQ",
      "import export questions",
      "international trade help",
      "shipping FAQ",
      "trade compliance questions",
      "Zexfro help center",
      "global trade support",
    ],
  });
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
