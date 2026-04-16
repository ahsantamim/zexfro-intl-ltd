import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import {
  FileText,
  Building2,
  ShieldCheck,
  Package,
  Banknote,
  Receipt,
  Globe2,
  Database,
  CheckCircle2,
  Award,
} from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "documentationCompliance",
  });

  return generatePageSEO({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/documentation-compliance",
    locale,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "trade documentation",
      "compliance documentation",
      "import export documents",
      "customs documentation",
      "trade compliance",
      "shipping documents",
    ],
  });
}

export default async function DocumentationCompliancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "documentationCompliance",
  });

  const sections = [
    { id: "overview", title: t("sections.overview") },
    { id: "company", title: t("sections.company") },
    { id: "trade-auth", title: t("sections.tradeAuth") },
    { id: "customs", title: t("sections.customs") },
    { id: "banking", title: t("sections.banking") },
    { id: "tax", title: t("sections.tax") },
    { id: "international", title: t("sections.international") },
    { id: "controls", title: t("sections.controls") },
    { id: "membership", title: t("sections.membership") },
    { id: "commitment", title: t("sections.commitment") },
  ];

  return (
    <DocLayout
      sections={sections}
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
    >
      {/* Section 1: Overview */}
      <DocSection id="overview" title={t("sections.overview")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-[#0a4a9e]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("overview.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("overview.cardDesc")}</p>
          </div>
        </div>

        <p>{t("overview.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            alt={t("overview.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("overview.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("overview.frameworkTitle")}
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("overview.framework1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("overview.framework2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("overview.framework3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("overview.framework4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("overview.framework5")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("overview.highlightTitle")}</p>
          <p className="mt-2 text-white/90">{t("overview.highlightDesc")}</p>
        </div>
      </DocSection>

      {/* Section 2: Company Registration & Legal Foundation */}
      <DocSection id="company" title={t("sections.company")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("company.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("company.cardDesc")}</p>
          </div>
        </div>

        <p>{t("company.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
            alt={t("company.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">{t("company.imageCaption")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("company.docsTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("company.doc1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("company.doc2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("company.doc3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("company.doc4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("company.authorityTitle")}
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  {t("company.authorityName")}
                </p>
                <p className="text-sm text-gray-700">
                  {t("company.authorityDesc")}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-600 mb-2">
                  {t("company.governanceLabel")}
                </p>
                <p className="text-sm text-gray-700">
                  {t("company.governanceDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("company.licenseTitle")}
          </h4>
          <p className="text-gray-700 mb-3">{t("company.licenseDesc")}</p>
          <div className="bg-white rounded-lg p-4 mt-3">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              {t("company.licenseAuthorityLabel")}
            </p>
            <p className="text-sm text-gray-700">
              {t("company.licenseAuthorityDesc")}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("company.highlightTitle")}</p>
          <p className="mt-2 text-white/90">{t("company.highlightDesc")}</p>
        </div>
      </DocSection>

      {/* Section 3: Import & Export Authorization */}
      <DocSection id="trade-auth" title={t("sections.tradeAuth")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("tradeAuth.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("tradeAuth.cardDesc")}</p>
          </div>
        </div>

        <p>{t("tradeAuth.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80"
            alt={t("tradeAuth.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("tradeAuth.imageCaption")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-center">
              {t("tradeAuth.ircTitle")}
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              {t("tradeAuth.ircDesc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>{t("tradeAuth.ircBenefit1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>{t("tradeAuth.ircBenefit2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>{t("tradeAuth.ircBenefit3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>{t("tradeAuth.ircBenefit4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-center">
              {t("tradeAuth.ercTitle")}
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              {t("tradeAuth.ercDesc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>{t("tradeAuth.ercBenefit1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>{t("tradeAuth.ercBenefit2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>{t("tradeAuth.ercBenefit3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>{t("tradeAuth.ercBenefit4")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("tradeAuth.authorityTitle")}
          </h4>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>{t("tradeAuth.authorityName")}</strong>
            </p>
            <p className="text-sm text-gray-700">
              {t("tradeAuth.authorityDesc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mt-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>{t("tradeAuth.authorityRole1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>{t("tradeAuth.authorityRole2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>{t("tradeAuth.authorityRole3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span>{t("tradeAuth.authorityRole4")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("tradeAuth.highlightTitle")}</p>
          <p className="mt-2 text-white/90">{t("tradeAuth.highlightDesc")}</p>
        </div>
      </DocSection>

      {/* Section 4: Customs & Shipment Compliance */}
      <DocSection id="customs" title={t("sections.customs")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("customs.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("customs.cardDesc")}</p>
          </div>
        </div>

        <p>{t("customs.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt={t("customs.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">{t("customs.imageCaption")}</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-2">
            {t("customs.docsTitle")}
          </h4>
          <p className="text-sm text-gray-700 mb-5">{t("customs.docsIntro")}</p>

          <div className="rounded-lg bg-white/70 border border-yellow-200 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 bg-white border-b border-yellow-200">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                {t("customs.docColumnTitle")}
              </p>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                {t("customs.purposeColumnTitle")}
              </p>
            </div>
            <ul className="divide-y divide-yellow-100">
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  {t("customs.doc1Name")}
                </span>
                <span>{t("customs.doc1Purpose")}</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  {t("customs.doc2Name")}
                </span>
                <span>{t("customs.doc2Purpose")}</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  {t("customs.doc3Name")}
                </span>
                <span>{t("customs.doc3Purpose")}</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  {t("customs.doc4Name")}
                </span>
                <span>{t("customs.doc4Purpose")}</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  {t("customs.doc5Name")}
                </span>
                <span>{t("customs.doc5Purpose")}</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  {t("customs.doc6Name")}
                </span>
                <span>{t("customs.doc6Purpose")}</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  {t("customs.doc7Name")}
                </span>
                <span>{t("customs.doc7Purpose")}</span>
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  {t("customs.doc8Name")}
                </span>
                <span>{t("customs.doc8Purpose")}</span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-5">
            {t("customs.clearanceNote")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📋</div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("customs.feature1Title")}
            </h4>
            <p className="text-sm text-gray-600">{t("customs.feature1Desc")}</p>
          </div>
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("customs.feature2Title")}
            </h4>
            <p className="text-sm text-gray-600">{t("customs.feature2Desc")}</p>
          </div>
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🔍</div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("customs.feature3Title")}
            </h4>
            <p className="text-sm text-gray-600">{t("customs.feature3Desc")}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("customs.highlightTitle")}</p>
          <p className="mt-2 text-white/90">{t("customs.highlightDesc")}</p>
        </div>
      </DocSection>

      {/* Section 5: Banking & Financial Compliance */}
      <DocSection id="banking" title={t("sections.banking")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Banknote className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("banking.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("banking.cardDesc")}</p>
          </div>
        </div>

        <p>{t("banking.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&q=80"
            alt={t("banking.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">{t("banking.imageCaption")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("banking.docsTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>{t("banking.doc1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>{t("banking.doc2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>{t("banking.doc3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>{t("banking.doc4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("banking.authorityTitle")}
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  {t("banking.authorityName")}
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  {t("banking.authorityDesc")}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-gray-600 mb-2">
                  {t("banking.complianceLabel")}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {t("banking.requirement1")}</li>
                  <li>• {t("banking.requirement2")}</li>
                  <li>• {t("banking.requirement3")}</li>
                  <li>• {t("banking.requirement4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("banking.benefitsTitle")}
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold text-xl">✔</span>
              <span>{t("banking.benefit1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold text-xl">✔</span>
              <span>{t("banking.benefit2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold text-xl">✔</span>
              <span>{t("banking.benefit3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold text-xl">✔</span>
              <span>{t("banking.benefit4")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("banking.highlightTitle")}</p>
          <p className="mt-2 text-white/90">{t("banking.highlightDesc")}</p>
        </div>
      </DocSection>

      {/* Section 6: Tax & VAT Compliance */}
      <DocSection id="tax" title={t("sections.tax")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Receipt className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("tax.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("tax.cardDesc")}</p>
          </div>
        </div>

        <p>{t("tax.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80"
            alt={t("tax.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">{t("tax.imageCaption")}</p>
          </div>
        </div>

        <div className="bg-teal-50/30 border-l-4 border-teal-500 p-6 my-6 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("tax.coverageTitle")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">
                {t("tax.vatTitle")}
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{t("tax.vatItem1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{t("tax.vatItem2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{t("tax.vatItem3")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3">
                {t("tax.incomeTaxTitle")}
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{t("tax.incomeTaxItem1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{t("tax.incomeTaxItem2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{t("tax.incomeTaxItem3")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-teal-50/40 border-2 border-teal-500 rounded-lg p-6 my-6 shadow-md">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            {t("tax.authorityTitle")}
          </h4>
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-900">
              {t("tax.authorityName")}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {t("tax.authoritySubtitle")}
            </p>
          </div>
          <p className="text-sm text-gray-700 text-center">
            {t("tax.authorityDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
          <div className="bg-teal-50/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">✓</div>
            <p className="font-semibold text-gray-900 text-sm mb-1">
              {t("tax.feature1Title")}
            </p>
            <p className="text-xs text-gray-600">{t("tax.feature1Desc")}</p>
          </div>
          <div className="bg-teal-50/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">✓</div>
            <p className="font-semibold text-gray-900 text-sm mb-1">
              {t("tax.feature2Title")}
            </p>
            <p className="text-xs text-gray-600">{t("tax.feature2Desc")}</p>
          </div>
          <div className="bg-teal-50/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">✓</div>
            <p className="font-semibold text-gray-900 text-sm mb-1">
              {t("tax.feature3Title")}
            </p>
            <p className="text-xs text-gray-600">{t("tax.feature3Desc")}</p>
          </div>
          <div className="bg-teal-50/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">✓</div>
            <p className="font-semibold text-gray-900 text-sm mb-1">
              {t("tax.feature4Title")}
            </p>
            <p className="text-xs text-gray-600">{t("tax.feature4Desc")}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("tax.highlightTitle")}</p>
          <p className="mt-2 text-white/90">{t("tax.highlightDesc")}</p>
        </div>
      </DocSection>

      {/* Section 7: International Trade Compliance */}
      <DocSection id="international" title={t("sections.international")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Globe2 className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("international.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("international.cardDesc")}</p>
          </div>
        </div>

        <p>{t("international.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80"
            alt={t("international.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("international.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("international.regulationsTitle")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">
                {t("international.nationalTitle")}
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{t("international.nationalItem1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{t("international.nationalItem2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{t("international.nationalItem3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{t("international.nationalItem4")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3">
                {t("international.standardsTitle")}
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{t("international.standardsItem1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{t("international.standardsItem2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{t("international.standardsItem3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{t("international.standardsItem4")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-white border-2 border-indigo-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">
              {t("international.policyTitle")}
            </h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              {t("international.policyDesc")}
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• {t("international.policyItem1")}</li>
              <li>• {t("international.policyItem2")}</li>
              <li>• {t("international.policyItem3")}</li>
              <li>• {t("international.policyItem4")}</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-indigo-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">
              {t("international.customsTitle")}
            </h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              {t("international.customsDesc")}
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• {t("international.customsItem1")}</li>
              <li>• {t("international.customsItem2")}</li>
              <li>• {t("international.customsItem3")}</li>
              <li>• {t("international.customsItem4")}</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-indigo-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">
              {t("international.intlStandardsTitle")}
            </h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              {t("international.intlStandardsDesc")}
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>• {t("international.intlStandardsItem1")}</li>
              <li>• {t("international.intlStandardsItem2")}</li>
              <li>• {t("international.intlStandardsItem3")}</li>
              <li>• {t("international.intlStandardsItem4")}</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            {t("international.highlightTitle")}
          </p>
          <p className="mt-2 text-white/90">
            {t("international.highlightDesc")}
          </p>
        </div>
      </DocSection>

      {/* Section 8: Internal Control & Record Management */}
      <DocSection id="controls" title={t("sections.controls")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Database className="w-6 h-6 text-cyan-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("controls.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("controls.cardDesc")}</p>
          </div>
        </div>

        <p>{t("controls.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80"
            alt={t("controls.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("controls.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("controls.practicesTitle")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>{t("controls.practice1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>{t("controls.practice2")}</span>
              </li>
            </ul>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>{t("controls.practice3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 font-bold">•</span>
                <span>{t("controls.practice4")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white border-2 border-cyan-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("controls.docManagementTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.docManagement1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.docManagement2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.docManagement3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.docManagement4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.docManagement5")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-cyan-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("controls.qualityControlTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.qualityControl1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.qualityControl2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.qualityControl3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.qualityControl4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600">✓</span>
                <span>{t("controls.qualityControl5")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("controls.highlightTitle")}</p>
          <p className="mt-2 text-white/90">{t("controls.highlightDesc")}</p>
        </div>
      </DocSection>

      {/* Section 9: Member of Association */}
      <DocSection id="membership" title={t("sections.membership")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("membership.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("membership.cardDesc")}</p>
          </div>
        </div>

        <p className="text-lg">{t("membership.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
            alt={t("membership.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("membership.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("membership.aboutTitle")}
          </h4>
          <p className="text-gray-700 mb-4">{t("membership.aboutDesc")}</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold">•</span>
              <span>{t("membership.aboutRole1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold">•</span>
              <span>{t("membership.aboutRole2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold">•</span>
              <span>{t("membership.aboutRole3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold">•</span>
              <span>{t("membership.aboutRole4")}</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white border-2 border-amber-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4">
              {t("membership.benefitsTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{t("membership.benefit1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{t("membership.benefit2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{t("membership.benefit3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{t("membership.benefit4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-amber-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-4">
              {t("membership.commitmentTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{t("membership.commitment1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{t("membership.commitment2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{t("membership.commitment3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{t("membership.commitment4")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("membership.highlightTitle")}</p>
          <p className="mt-2 text-white/90">{t("membership.highlightDesc")}</p>
        </div>
      </DocSection>

      {/* Section 10: Compliance Commitment */}
      <DocSection id="commitment" title={t("sections.commitment")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("commitment.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("commitment.cardDesc")}</p>
          </div>
        </div>

        <p className="text-lg">{t("commitment.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
            alt={t("commitment.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("commitment.imageCaption")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("commitment.value1Title")}
            </h4>
            <p className="text-sm text-gray-600">
              {t("commitment.value1Desc")}
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("commitment.value2Title")}
            </h4>
            <p className="text-sm text-gray-600">
              {t("commitment.value2Desc")}
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("commitment.value3Title")}
            </h4>
            <p className="text-sm text-gray-600">
              {t("commitment.value3Desc")}
            </p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("commitment.coreValuesTitle")}
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>{t("commitment.coreValue1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>{t("commitment.coreValue2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>{t("commitment.coreValue3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>{t("commitment.coreValue4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>{t("commitment.coreValue5")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center mb-8">
          <p className="text-xl font-bold">{t("commitment.highlightTitle")}</p>
          <p className="mt-2 text-white/90">{t("commitment.highlightDesc")}</p>
        </div>

        {/* Call-to-Action box */}
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white">
          <h4 className="text-2xl font-bold mb-4">
            {t("commitment.ctaTitle")}
          </h4>
          <p className="mb-6 text-white/90">{t("commitment.ctaDesc")}</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            {t("commitment.ctaButton")}
          </a>
        </div>
      </DocSection>
    </DocLayout>
  );
}
