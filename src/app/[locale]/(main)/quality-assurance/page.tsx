import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import {
  ShieldCheck,
  Users,
  FileCheck,
  Eye,
  Award,
  CheckCircle,
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
  const t = await getTranslations({ locale, namespace: "qualityAssurance" });

  return generatePageSEO({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/quality-assurance",
    locale,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "quality assurance",
      "product quality control",
      "trade quality standards",
      "inspection services",
      "quality certification",
      "product testing",
    ],
  });
}

export default async function QualityAssurancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "qualityAssurance" });

  const sections = [
    { id: "overview", title: t("sections.overview") },
    { id: "partner-vetting", title: t("sections.partnerVetting") },
    { id: "compliance", title: t("sections.compliance") },
    { id: "monitoring", title: t("sections.monitoring") },
    { id: "standards", title: t("sections.standards") },
    { id: "practice", title: t("sections.practice") },
  ];

  return (
    <DocLayout
      sections={sections}
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
    >
      {/* Section 1: Quality Assurance Overview */}
      <DocSection id="overview" title={t("sections.overview")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#0a4a9e]" />
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
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
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

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          {t("overview.coreTitle")}
        </h4>
        <p>{t("overview.coreDesc")}</p>

        <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("overview.pillarsTitle")}
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("overview.pillar1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("overview.pillar2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("overview.pillar3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a4a9e] font-bold">•</span>
              <span>{t("overview.pillar4")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("overview.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("overview.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 2: Verified Partners & Product Vetting */}
      <DocSection id="partner-vetting" title={t("sections.partnerVetting")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("partnerVetting.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("partnerVetting.cardDesc")}</p>
          </div>
        </div>

        <p>{t("partnerVetting.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
            alt={t("partnerVetting.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("partnerVetting.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("partnerVetting.processTitle")}
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t("partnerVetting.verificationTitle")}
              </h5>
              <p className="text-sm text-gray-700 mb-2">
                {t("partnerVetting.verificationDesc")}
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• {t("partnerVetting.verificationItem1")}</li>
                <li>• {t("partnerVetting.verificationItem2")}</li>
                <li>• {t("partnerVetting.verificationItem3")}</li>
                <li>• {t("partnerVetting.verificationItem4")}</li>
                <li>• {t("partnerVetting.verificationItem5")}</li>
                <li>• {t("partnerVetting.verificationItem6")}</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t("partnerVetting.productTitle")}
              </h5>
              <p className="text-sm text-gray-700">
                {t("partnerVetting.productDesc")}
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          {t("partnerVetting.riskTitle")}
        </h4>
        <p>{t("partnerVetting.riskDesc")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white border-2 border-green-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("partnerVetting.buyersTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>{t("partnerVetting.buyersBenefit1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>{t("partnerVetting.buyersBenefit2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>{t("partnerVetting.buyersBenefit3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>{t("partnerVetting.buyersBenefit4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-green-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("partnerVetting.sellersTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>{t("partnerVetting.sellersBenefit1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>{t("partnerVetting.sellersBenefit2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>{t("partnerVetting.sellersBenefit3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>{t("partnerVetting.sellersBenefit4")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("partnerVetting.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("partnerVetting.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 3: Regulatory Compliance & Security */}
      <DocSection id="compliance" title={t("sections.compliance")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileCheck className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("compliance.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("compliance.cardDesc")}</p>
          </div>
        </div>

        <p>{t("compliance.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            alt={t("compliance.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("compliance.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("compliance.commitmentsTitle")}
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>{t("compliance.commitment1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>{t("compliance.commitment2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span>{t("compliance.commitment3")}</span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          {t("compliance.beyondTitle")}
        </h4>
        <p>{t("compliance.beyondDesc")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("compliance.legalTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("compliance.legalItem1")}</li>
              <li>• {t("compliance.legalItem2")}</li>
              <li>• {t("compliance.legalItem3")}</li>
              <li>• {t("compliance.legalItem4")}</li>
              <li>• {t("compliance.legalItem5")}</li>
              <li>• {t("compliance.legalItem6")}</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("compliance.safetyTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("compliance.safetyItem1")}</li>
              <li>• {t("compliance.safetyItem2")}</li>
              <li>• {t("compliance.safetyItem3")}</li>
              <li>• {t("compliance.safetyItem4")}</li>
              <li>• {t("compliance.safetyItem5")}</li>
              <li>• {t("compliance.safetyItem6")}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("compliance.euTitle")}
          </h4>
          <p className="text-gray-700 mb-3">{t("compliance.euDesc")}</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>{t("compliance.euItem1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>{t("compliance.euItem2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>{t("compliance.euItem3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold text-xl">✔</span>
              <span>{t("compliance.euItem4")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("compliance.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("compliance.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 4: Real-Time Monitoring & Transparency */}
      <DocSection id="monitoring" title={t("sections.monitoring")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Eye className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("monitoring.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("monitoring.cardDesc")}</p>
          </div>
        </div>

        <p>{t("monitoring.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            alt={t("monitoring.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("monitoring.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("monitoring.benefitsTitle")}
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("monitoring.benefit1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("monitoring.benefit2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 font-bold">•</span>
              <span>{t("monitoring.benefit3")}</span>
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          {t("monitoring.serviceTitle")}
        </h4>
        <p>{t("monitoring.serviceDesc")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-white border border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {t("monitoring.stat1")}
            </div>
            <div className="text-sm text-gray-600 font-semibold mb-1">
              {t("monitoring.stat1Label")}
            </div>
            <div className="text-xs text-gray-500">
              {t("monitoring.stat1Desc")}
            </div>
          </div>
          <div className="bg-white border border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {t("monitoring.stat2")}
            </div>
            <div className="text-sm text-gray-600 font-semibold mb-1">
              {t("monitoring.stat2Label")}
            </div>
            <div className="text-xs text-gray-500">
              {t("monitoring.stat2Desc")}
            </div>
          </div>
          <div className="bg-white border border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {t("monitoring.stat3")}
            </div>
            <div className="text-sm text-gray-600 font-semibold mb-1">
              {t("monitoring.stat3Label")}
            </div>
            <div className="text-xs text-gray-500">
              {t("monitoring.stat3Desc")}
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            {t("monitoring.featuresTitle")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>{t("monitoring.feature1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>{t("monitoring.feature2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>{t("monitoring.feature3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>{t("monitoring.feature4")}</span>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>{t("monitoring.feature5")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>{t("monitoring.feature6")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>{t("monitoring.feature7")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span>{t("monitoring.feature8")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("monitoring.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("monitoring.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 5: International Standards Alignment */}
      <DocSection id="standards" title={t("sections.standards")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("standards.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("standards.cardDesc")}</p>
          </div>
        </div>

        <p>{t("standards.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80"
            alt={t("standards.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("standards.imageCaption")}
            </p>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("standards.frameworkTitle")}
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t("standards.goodsTitle")}
              </h5>
              <p className="text-sm text-gray-700">
                {t("standards.goodsDesc")}
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t("standards.requirementsTitle")}
              </h5>
              <p className="text-sm text-gray-700">
                {t("standards.requirementsDesc")}
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t("standards.credibilityTitle")}
              </h5>
              <p className="text-sm text-gray-700">
                {t("standards.credibilityDesc")}
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t("standards.marketsTitle")}
              </h5>
              <p className="text-sm text-gray-700">
                {t("standards.marketsDesc")}
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          {t("standards.reputationTitle")}
        </h4>
        <p>{t("standards.reputationDesc")}</p>

        <div className="bg-white border-2 border-orange-600 rounded-lg p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            {t("standards.recognizedTitle")}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-orange-600 text-sm">
                {t("standards.iso")}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {t("standards.isoDesc")}
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-orange-600 text-sm">
                {t("standards.ce")}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {t("standards.ceDesc")}
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-orange-600 text-sm">
                {t("standards.bsti")}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {t("standards.bstiDesc")}
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-orange-600 text-sm">
                {t("standards.gmp")}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {t("standards.gmpDesc")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("standards.bannerTitle")}</p>
          <p className="mt-2 text-white/90">{t("standards.bannerDesc")}</p>
        </div>
      </DocSection>

      {/* Section 6: Quality Assurance in Practice */}
      <DocSection id="practice" title={t("sections.practice")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("practice.cardTitle")}
            </h3>
            <p className="text-gray-600">{t("practice.cardDesc")}</p>
          </div>
        </div>

        <p>{t("practice.intro")}</p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80"
            alt={t("practice.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              {t("practice.imageCaption")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("practice.step1Title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("practice.step1Item1")}</li>
              <li>• {t("practice.step1Item2")}</li>
              <li>• {t("practice.step1Item3")}</li>
              <li>• {t("practice.step1Item4")}</li>
              <li>• {t("practice.step1Item5")}</li>
            </ul>
          </div>

          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("practice.step2Title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("practice.step2Item1")}</li>
              <li>• {t("practice.step2Item2")}</li>
              <li>• {t("practice.step2Item3")}</li>
              <li>• {t("practice.step2Item4")}</li>
              <li>• {t("practice.step2Item5")}</li>
            </ul>
          </div>

          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("practice.step3Title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("practice.step3Item1")}</li>
              <li>• {t("practice.step3Item2")}</li>
              <li>• {t("practice.step3Item3")}</li>
              <li>• {t("practice.step3Item4")}</li>
              <li>• {t("practice.step3Item5")}</li>
            </ul>
          </div>

          <div className="bg-teal-50/20 border-2 border-teal-300 rounded-lg p-6 hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("practice.step4Title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• {t("practice.step4Item1")}</li>
              <li>• {t("practice.step4Item2")}</li>
              <li>• {t("practice.step4Item3")}</li>
              <li>• {t("practice.step4Item4")}</li>
              <li>• {t("practice.step4Item5")}</li>
            </ul>
          </div>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 mt-8">
          {t("practice.comparisonTitle")}
        </h4>
        <p>{t("practice.comparisonDesc1")}</p>

        <p className="mt-4">{t("practice.comparisonDesc2")}</p>

        <div className="bg-teal-50/30 border-l-4 border-teal-500 p-6 my-6 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">
            {t("practice.strengthsTitle")}
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>{t("practice.strength1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>{t("practice.strength2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold">•</span>
              <span>{t("practice.strength3")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-teal-50/40 border-2 border-teal-500 rounded-lg p-6 my-6 shadow-md">
          <h4 className="font-bold text-gray-900 mb-4 text-center text-xl">
            {t("practice.resultsTitle")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-teal-50/30 rounded-lg p-6 h-full">
                <div className="text-4xl mb-3">🛡️</div>
                <p className="font-semibold text-gray-900 mb-2">
                  {t("practice.result1Title")}
                </p>
                <p className="text-sm text-gray-600">
                  {t("practice.result1Desc")}
                </p>
              </div>
            </div>
            <div>
              <div className="bg-teal-50/30 rounded-lg p-6 h-full">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-semibold text-gray-900 mb-2">
                  {t("practice.result2Title")}
                </p>
                <p className="text-sm text-gray-600">
                  {t("practice.result2Desc")}
                </p>
              </div>
            </div>
            <div>
              <div className="bg-teal-50/30 rounded-lg p-6 h-full">
                <div className="text-4xl mb-3">📊</div>
                <p className="font-semibold text-gray-900 mb-2">
                  {t("practice.result3Title")}
                </p>
                <p className="text-sm text-gray-600">
                  {t("practice.result3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">{t("practice.actionTitle")}</p>
          <p className="mt-2 text-white/90">{t("practice.actionDesc")}</p>
        </div>

        {/* Call-to-Action box */}
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white my-8">
          <h4 className="text-2xl font-bold mb-4">{t("practice.ctaTitle")}</h4>
          <p className="mb-6 text-white/90">{t("practice.ctaDesc")}</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            {t("practice.ctaButton")}
          </a>
        </div>
      </DocSection>
    </DocLayout>
  );
}
