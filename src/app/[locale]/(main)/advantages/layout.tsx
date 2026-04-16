import { getTranslations } from "next-intl/server";
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
  const t = await getTranslations({ locale, namespace: "advantages" });

  return generatePageSEO({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/advantages",
    locale,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "trade advantages",
      "Zexfro benefits",
      "import export advantages",
      "trade partner benefits",
      "global trade platform",
    ],
  });
}

export default function AdvantagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




