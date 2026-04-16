import { PageHeader } from "@/components/ui/PageHeader";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "competitiveAdvantagesPage",
  });

  return generatePageSEO({
    title: t("pageTitle"),
    description: t("pageDescription"),
    path: "/competitive-advantages",
    locale,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "competitive advantages",
      "trade partner benefits",
      "why choose Zexfro",
      "trade platform advantages",
      "import export benefits",
    ],
  });
}

export default function CompetitiveAdvantagesPage() {
  const t = useTranslations("competitiveAdvantagesPage");

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
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("introduction")}
              </p>
            </div>

            {/* Advantages */}
            <div className="space-y-12">
              {/* Advantage 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("advantages.network.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("advantages.network.description")}
                </p>
                <div className="mt-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {t("advantages.network.keyPointsTitle")}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{t("advantages.network.keyPoints.0")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{t("advantages.network.keyPoints.1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{t("advantages.network.keyPoints.2")}</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-6 text-blue-800 font-semibold italic">
                  {t("advantages.network.tagline")}
                </p>
              </div>

              {/* Advantage 2 */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-8 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("advantages.marketInsight.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("advantages.marketInsight.description")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {t("advantages.marketInsight.insights.analysis")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("advantages.marketInsight.insights.analysisDesc")}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {t("advantages.marketInsight.insights.regulatory")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("advantages.marketInsight.insights.regulatoryDesc")}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-green-800 font-semibold italic">
                  {t("advantages.marketInsight.tagline")}
                </p>
              </div>

              {/* Advantage 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 p-8 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("advantages.logistics.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("advantages.logistics.description")}
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {t("advantages.logistics.steps.0.name")}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {t("advantages.logistics.steps.1.name")}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {t("advantages.logistics.steps.2.name")}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {t("advantages.logistics.steps.3.name")}
                      </h4>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-purple-800 font-semibold italic">
                  {t("advantages.logistics.tagline")}
                </p>
              </div>

              {/* Advantage 4 */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 p-8 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("advantages.quality.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("advantages.quality.description")}
                </p>
                <div className="bg-white p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-gray-900 mb-4">
                    {t("advantages.quality.frameworkTitle")}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600">✓</span>
                      <span>{t("advantages.quality.framework.0")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600">✓</span>
                      <span>{t("advantages.quality.framework.1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600">✓</span>
                      <span>{t("advantages.quality.framework.2")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600">✓</span>
                      <span>{t("advantages.quality.framework.3")}</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-6 text-orange-800 font-semibold">
                  {t("advantages.quality.conclusion")}
                </p>
              </div>

              {/* Advantage 5 */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 p-8 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("advantages.delivery.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("advantages.delivery.description")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {t("advantages.delivery.features.0.title")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("advantages.delivery.features.0.description")}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {t("advantages.delivery.features.1.title")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("advantages.delivery.features.1.description")}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {t("advantages.delivery.features.2.title")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("advantages.delivery.features.2.description")}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {t("advantages.delivery.features.3.title")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("advantages.delivery.features.3.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 6 */}
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-l-4 border-teal-600 p-8 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("advantages.communication.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("advantages.communication.description")}
                </p>
                <div className="bg-white p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-gray-900 mb-4">
                    {t("advantages.communication.supportTitle")}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600">•</span>
                      <span>{t("advantages.communication.support.0")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600">•</span>
                      <span>{t("advantages.communication.support.1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600">•</span>
                      <span>{t("advantages.communication.support.2")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600">•</span>
                      <span>{t("advantages.communication.support.3")}</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-6 text-teal-800 font-semibold italic">
                  {t("advantages.communication.tagline")}
                </p>
              </div>

              {/* Advantage 7 */}
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-600 p-8 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("advantages.customized.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("advantages.customized.description")}
                </p>
                <div className="bg-white p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-gray-900 mb-4">
                    {t("advantages.customized.servicesTitle")}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600">✓</span>
                      <span>{t("advantages.customized.services.0")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600">✓</span>
                      <span>{t("advantages.customized.services.1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600">✓</span>
                      <span>{t("advantages.customized.services.2")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600">✓</span>
                      <span>{t("advantages.customized.services.3")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-600">✓</span>
                      <span>{t("advantages.customized.services.4")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-12 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                {t("conclusion.title")}
              </h3>
              <p className="text-lg mb-6">{t("conclusion.description")}</p>
              <Link
                href="/contact"
                className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {t("conclusion.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
