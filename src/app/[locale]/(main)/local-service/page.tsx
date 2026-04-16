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
  const t = await getTranslations({ locale, namespace: "localServicePage" });

  return generatePageSEO({
    title: t("pageTitle"),
    description: t("pageDescription"),
    path: "/local-service",
    locale,
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "local trade services",
      "domestic distribution",
      "local sourcing",
      "Bangladesh trade services",
      "local logistics",
    ],
  });
}

export default function LocalServicePage() {
  const t = useTranslations("localServicePage");
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title={t("header.title")}
        description={t("header.description")}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("introduction.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("introduction.description")}
              </p>
            </div>

            {/* Local Market Distribution */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("distribution.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("distribution.description")}
              </p>
            </div>

            {/* Sourcing & Promotion */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("sourcing.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("sourcing.description")}
              </p>

              {/* Local Supplier Development */}
              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {t("sourcing.supplierDevelopment.title")}
                </h4>
                <p className="text-gray-700 mb-4">
                  {t("sourcing.supplierDevelopment.intro")}
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">•</span>
                    <span>{t("sourcing.supplierDevelopment.items.0")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">•</span>
                    <span>{t("sourcing.supplierDevelopment.items.1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">•</span>
                    <span>{t("sourcing.supplierDevelopment.items.2")}</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  {t("sourcing.supplierDevelopment.conclusion")}
                </p>
              </div>
            </div>

            {/* Quality Inspection */}
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("quality.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("quality.description")}
              </p>
            </div>

            {/* Key Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              {/* Local Marketing */}
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {t("activities.marketing.title")}
                </h4>
                <p className="text-gray-700 mb-4">
                  {t("activities.marketing.intro")}
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• {t("activities.marketing.items.0")}</li>
                  <li>• {t("activities.marketing.items.1")}</li>
                  <li>• {t("activities.marketing.items.2")}</li>
                  <li>• {t("activities.marketing.items.3")}</li>
                </ul>
                <p className="text-gray-700 mt-4 text-sm">
                  {t("activities.marketing.conclusion")}
                </p>
              </div>

              {/* Warehousing */}
              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {t("activities.warehousing.title")}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t("activities.warehousing.description")}
                </p>
              </div>

              {/* Logistics */}
              <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {t("activities.logistics.title")}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t("activities.logistics.description")}
                </p>
              </div>

              {/* Customer Support */}
              <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {t("activities.customerSupport.title")}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t("activities.customerSupport.description")}
                </p>
              </div>
            </div>

            {/* Employment & Economic Contribution */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                {t("employment.title")}
              </h3>
              <p className="text-white/95 leading-relaxed">
                {t("employment.description")}
              </p>
            </div>

            {/* Ethical Practices */}
            <div className="bg-gray-50 border-l-4 border-gray-600 p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("ethical.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("ethical.description")}
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <a
                href="/contact"
                className="inline-block bg-[#0a4a9e] text-white font-bold px-8 py-4 rounded-full hover:bg-[#05306b] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {t("cta.button")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
