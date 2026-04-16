import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import { Shield, FileCheck, Users, Leaf, Target, Scale } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "complianceStandards" });

  return generatePageSEO({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/compliance-standards",
    locale,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "trade compliance",
      "compliance standards",
      "import export regulations",
      "trade certifications",
      "regulatory compliance",
      "quality standards",
    ],
  });
}

export default async function ComplianceStandardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "complianceStandards" });

  const sections = [
    { id: "overview", title: t("sections.overview") },
    { id: "regulatory", title: t("sections.regulatory") },
    { id: "quality", title: t("sections.quality") },
    { id: "ethical", title: t("sections.ethical") },
    { id: "environmental", title: t("sections.environmental") },
    { id: "pillars", title: t("sections.pillars") },
  ];

  return (
    <DocLayout
      sections={sections}
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
    >
      {/* Section 1: Compliance & Standards Overview */}
      <DocSection id="overview" title={t("sections.overview")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-[#0a4a9e]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("overview.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("overview.cardDesc")}</p>
          </div>
        </div>

        <p>{t("overview.intro1")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
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

        <p>{t("overview.intro2")}</p>

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
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("overview.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("overview.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 2: Regulatory & Trade Compliance */}
      <DocSection id="regulatory" title={t("sections.regulatory")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Scale className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("regulatory.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("regulatory.cardDesc")}</p>
          </div>
        </div>

        <p>{t("regulatory.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            alt={t("regulatory.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("regulatory.imageCaption")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("regulatory.customs.title")}
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              {t("regulatory.customs.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.customs.item1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.customs.item2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.customs.item3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.customs.item4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("regulatory.sanctions.title")}
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              {t("regulatory.sanctions.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.sanctions.item1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.sanctions.item2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.sanctions.item3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.sanctions.item4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("regulatory.anticorruption.title")}
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              {t("regulatory.anticorruption.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.anticorruption.item1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.anticorruption.item2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.anticorruption.item3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>{t("regulatory.anticorruption.item4")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("regulatory.fcpaTitle")}
          </h4>
          <p className="text-gray-700 mb-3">{t("regulatory.fcpaDesc")}</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>{t("regulatory.fcpaItem1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>{t("regulatory.fcpaItem2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>{t("regulatory.fcpaItem3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>{t("regulatory.fcpaItem4")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-green-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("regulatory.benefitsTitle")}
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("regulatory.benefit1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("regulatory.benefit2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("regulatory.benefit3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("regulatory.benefit4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✔</span>
              <span>{t("regulatory.benefit5")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("regulatory.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("regulatory.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 3: Quality Assurance & Standards */}
      <DocSection id="quality" title={t("sections.quality")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileCheck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("quality.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("quality.cardDesc")}</p>
          </div>
        </div>

        <p>{t("quality.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
            alt={t("quality.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">{t("quality.imageCaption")}</p>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("quality.isoTitle")}
          </h4>
          <p className="text-gray-700 mb-4">{t("quality.isoDesc")}</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>{t("quality.isoItem1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>{t("quality.isoItem2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>{t("quality.isoItem3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>{t("quality.isoItem4")}</span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          {t("quality.productTitle")}
        </h4>
        <p>{t("quality.productDesc")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-white border-2 border-purple-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">
              {t("quality.ce.title")}
            </h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              {t("quality.ce.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("quality.ce.item1")}</li>
              <li>• {t("quality.ce.item2")}</li>
              <li>• {t("quality.ce.item3")}</li>
              <li>• {t("quality.ce.item4")}</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-purple-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">
              {t("quality.astm.title")}
            </h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              {t("quality.astm.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("quality.astm.item1")}</li>
              <li>• {t("quality.astm.item2")}</li>
              <li>• {t("quality.astm.item3")}</li>
              <li>• {t("quality.astm.item4")}</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-purple-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-center">
              {t("quality.oeko.title")}
            </h4>
            <p className="text-sm text-gray-700 text-center mb-4">
              {t("quality.oeko.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("quality.oeko.item1")}</li>
              <li>• {t("quality.oeko.item2")}</li>
              <li>• {t("quality.oeko.item3")}</li>
              <li>• {t("quality.oeko.item4")}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            {t("quality.performanceTitle")}
          </h4>
          <div className="text-center">
            <div className="inline-block bg-purple-50 rounded-lg p-8">
              <div className="text-6xl font-bold text-purple-600 mb-3">
                {t("quality.performanceRate")}
              </div>
              <div className="text-lg text-gray-900 font-semibold mb-2">
                {t("quality.performanceLabel")}
              </div>
              <div className="text-sm text-gray-600">
                {t("quality.performanceDesc")}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("quality.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("quality.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 4: Ethical Sourcing & Social Compliance */}
      <DocSection id="ethical" title={t("sections.ethical")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("ethical.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("ethical.cardDesc")}</p>
          </div>
        </div>

        <p>{t("ethical.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
            alt={t("ethical.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">{t("ethical.imageCaption")}</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("ethical.laborTitle")}
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.laborItem1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.laborItem2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.laborItem3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.laborItem4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.laborItem5")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.laborItem6")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("ethical.auditTitle")}
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.auditItem1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.auditItem2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.auditItem3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.auditItem4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.auditItem5")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("ethical.transparencyTitle")}
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.transparencyItem1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.transparencyItem2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.transparencyItem3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.transparencyItem4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("ethical.transparencyItem5")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("ethical.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("ethical.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 5: Environmental & Sustainability Standards */}
      <DocSection id="environmental" title={t("sections.environmental")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Leaf className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("environmental.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("environmental.cardDesc")}</p>
          </div>
        </div>

        <p>{t("environmental.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
            alt={t("environmental.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("environmental.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("environmental.carbonTitle")}
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.carbonItem1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.carbonItem2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.carbonItem3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.carbonItem4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.carbonItem5")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("environmental.sustainableTitle")}
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.sustainableItem1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.sustainableItem2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.sustainableItem3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.sustainableItem4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.sustainableItem5")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("environmental.wasteTitle")}
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.wasteItem1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.wasteItem2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.wasteItem3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.wasteItem4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 font-bold">•</span>
              <span>{t("environmental.wasteItem5")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("environmental.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("environmental.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 6: Our Compliance Pillars */}
      <DocSection id="pillars" title={t("sections.pillars")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("pillars.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("pillars.cardDesc")}</p>
          </div>
        </div>

        <p>{t("pillars.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt={t("pillars.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">{t("pillars.imageCaption")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("pillars.pillar1.title")}
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              {t("pillars.pillar1.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("pillars.pillar1.item1")}</li>
              <li>• {t("pillars.pillar1.item2")}</li>
              <li>• {t("pillars.pillar1.item3")}</li>
              <li>• {t("pillars.pillar1.item4")}</li>
            </ul>
          </div>

          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("pillars.pillar2.title")}
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              {t("pillars.pillar2.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("pillars.pillar2.item1")}</li>
              <li>• {t("pillars.pillar2.item2")}</li>
              <li>• {t("pillars.pillar2.item3")}</li>
              <li>• {t("pillars.pillar2.item4")}</li>
            </ul>
          </div>

          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("pillars.pillar3.title")}
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              {t("pillars.pillar3.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("pillars.pillar3.item1")}</li>
              <li>• {t("pillars.pillar3.item2")}</li>
              <li>• {t("pillars.pillar3.item3")}</li>
              <li>• {t("pillars.pillar3.item4")}</li>
            </ul>
          </div>

          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("pillars.pillar4.title")}
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              {t("pillars.pillar4.desc")}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("pillars.pillar4.item1")}</li>
              <li>• {t("pillars.pillar4.item2")}</li>
              <li>• {t("pillars.pillar4.item3")}</li>
              <li>• {t("pillars.pillar4.item4")}</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("pillars.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("pillars.bannerDesc")}</p>
        </div>

        {/* Call-to-Action box */}
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
          <h4 className="text-2xl font-bold mb-4">{t("pillars.ctaTitle")}</h4>
          <p className="mb-6 text-white/90">{t("pillars.ctaDesc")}</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            {t("pillars.ctaButton")}
          </a>
        </div>
      </DocSection>
    </DocLayout>
  );
}
