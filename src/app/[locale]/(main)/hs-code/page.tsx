import { ContentLayout, ContentSection } from "@/components/ui/ContentLayout";
import { FileText, Globe, Download, Eye } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "hsCode" });

  return generatePageSEO({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/hs-code",
    locale,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "HS code",
      "harmonized system code",
      "customs classification",
      "tariff codes",
      "product classification",
      "import export codes",
      "customs tariff",
    ],
  });
}

export default async function HsCodePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "hsCode",
  });
  return (
    <ContentLayout
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
    >
      {/* Main Content */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-[#0a4a9e]" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("intro.title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t("intro.description1")} <strong>{t("intro.hsName")}</strong>{" "}
              {t("intro.description2")}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#0a4a9e] mb-2">
                {t("stats.countries")}
              </div>
              <div className="text-sm text-gray-600">
                {t("stats.countriesLabel")}
              </div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {t("stats.coverage")}
              </div>
              <div className="text-sm text-gray-600">
                {t("stats.coverageLabel")}
              </div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {t("stats.classifications")}
              </div>
              <div className="text-sm text-gray-600">
                {t("stats.classificationsLabel")}
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t("importance.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0a4a9e] font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {t("importance.point1Title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("importance.point1Desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {t("importance.point2Title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("importance.point2Desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {t("importance.point3Title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("importance.point3Desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {t("importance.point4Title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("importance.point4Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Download Section - BIG BUTTON */}
          <div className="bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#0a4a9e] rounded-2xl p-12 text-center shadow-2xl mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("download.title")}
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("download.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://drive.google.com/file/d/1R-8kn3JipJSm23KWBRVshdhdNVYs0CAJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#0a4a9e] font-bold text-lg px-10 py-5 rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Eye className="w-6 h-6" />
                {t("download.viewButton")}
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1R-8kn3JipJSm23KWBRVshdhdNVYs0CAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/20 text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                <Download className="w-6 h-6" />
                {t("download.downloadButton")}
              </a>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("help.title")}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t("help.description")}
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#0a4a9e] hover:bg-[#05306b] text-white font-bold px-8 py-3 rounded-full transition-colors duration-300"
            >
              {t("help.button")}
            </a>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
