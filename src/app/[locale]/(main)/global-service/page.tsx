import { PageHeader } from "@/components/ui/PageHeader";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "globalServicePage" });

  return generatePageSEO({
    title: t("pageTitle"),
    description: t("pageDescription"),
    path: "/global-service",
    locale,
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "global trade services",
      "international sourcing",
      "worldwide import export",
      "cross-border trade",
      "global logistics",
    ],
  });
}

export default function GlobalServicePage() {
  const t = useTranslations("globalServicePage");

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title={t("header.title")}
        description={t("header.description")}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("intro.title")}
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">{t("intro.description")}</p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("servicesTitle")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {t("services.shipping.title")}
                  </h4>
                  <p className="text-gray-700">
                    {t("services.shipping.description")}
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {t("services.customs.title")}
                  </h4>
                  <p className="text-gray-700">
                    {t("services.customs.description")}
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {t("services.sourcing.title")}
                  </h4>
                  <p className="text-gray-700">
                    {t("services.sourcing.description")}
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {t("services.documentation.title")}
                  </h4>
                  <p className="text-gray-700">
                    {t("services.documentation.description")}
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {t("services.finance.title")}
                  </h4>
                  <p className="text-gray-700">
                    {t("services.finance.description")}
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {t("services.quality.title")}
                  </h4>
                  <p className="text-gray-700">
                    {t("services.quality.description")}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
                <h3 className="text-2xl font-bold mb-4">{t("reach.title")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">
                      {t("reach.export.title")}
                    </h4>
                    <ul className="space-y-2">
                      <li>• {t("reach.export.items.0")}</li>
                      <li>• {t("reach.export.items.1")}</li>
                      <li>• {t("reach.export.items.2")}</li>
                      <li>• {t("reach.export.items.3")}</li>
                      <li>• {t("reach.export.items.4")}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">
                      {t("reach.import.title")}
                    </h4>
                    <ul className="space-y-2">
                      <li>• {t("reach.import.items.0")}</li>
                      <li>• {t("reach.import.items.1")}</li>
                      <li>• {t("reach.import.items.2")}</li>
                      <li>• {t("reach.import.items.3")}</li>
                      <li>• {t("reach.import.items.4")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("whyChoose.title")}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>{t("whyChoose.items.0")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>{t("whyChoose.items.1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>{t("whyChoose.items.2")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>{t("whyChoose.items.3")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>{t("whyChoose.items.4")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span>{t("whyChoose.items.5")}</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 text-lg">{t("conclusion")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
