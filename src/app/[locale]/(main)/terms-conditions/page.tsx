import {
  ContentLayout,
  ContentSection,
  SectionHeader,
  CTABox,
} from "@/components/ui/ContentLayout";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Users,
  CreditCard,
} from "lucide-react";
import { RegisterModal } from "@/components/home/RegisterModal";
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
  const t = await getTranslations({ locale, namespace: "termsConditions" });

  return generatePageSEO({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/terms-conditions",
    locale,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "terms and conditions",
      "trade terms",
      "service agreement",
      "user agreement",
      "trade platform terms",
    ],
  });
}

export default async function TermsConditionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "termsConditions",
  });
  return (
    <ContentLayout
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
      heroImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
    >
      {/* Introduction */}
      <ContentSection bgColor="white">
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 mb-8">
            <p className="text-gray-700 mb-2">
              <strong>{t("intro.lastUpdated")}</strong>{" "}
              {t("intro.lastUpdatedDate")}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>{t("intro.effectiveDate")}</strong>{" "}
              {t("intro.effectiveDateValue")}
            </p>
            <p className="text-gray-700 mb-0">
              <strong>{t("intro.version")}</strong> {t("intro.versionNumber")}
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t("intro.welcome")}
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mt-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {t("intro.noticeTitle")}
                </h4>
                <p className="text-gray-700 mb-0">{t("intro.noticeText")}</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Acceptance of Terms */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title={t("acceptance.title")}
          subtitle={t("acceptance.subtitle")}
          icon={<FileText className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("acceptance.agreementTitle")}
              </h4>
              <p className="text-gray-700">{t("acceptance.agreementText")}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("acceptance.eligibilityTitle")}
              </h4>
              <p className="text-gray-700">{t("acceptance.eligibilityText")}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("acceptance.businessTitle")}
              </h4>
              <p className="text-gray-700">{t("acceptance.businessText")}</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* User Accounts */}
      <ContentSection bgColor="white">
        <SectionHeader
          title={t("userAccounts.title")}
          subtitle={t("userAccounts.subtitle")}
          icon={<Users className="w-7 h-7 text-white" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {t("userAccounts.mustTitle")}
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("userAccounts.must1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("userAccounts.must2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("userAccounts.must3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("userAccounts.must4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("userAccounts.must5")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{t("userAccounts.must6")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {t("userAccounts.mustNotTitle")}
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>{t("userAccounts.mustNot1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>{t("userAccounts.mustNot2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>{t("userAccounts.mustNot3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>{t("userAccounts.mustNot4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>{t("userAccounts.mustNot5")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>{t("userAccounts.mustNot6")}</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Services & Orders */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          icon={<CreditCard className="w-7 h-7 text-white" />}
        />

        <div className="space-y-6 mt-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("services.descriptionTitle")}
            </h4>
            <p className="text-gray-700">{t("services.descriptionText")}</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("services.orderTitle")}
            </h4>
            <p className="text-gray-700 mb-4">{t("services.orderIntro")}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>{t("services.order1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>{t("services.order2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>{t("services.order3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>{t("services.order4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("services.pricingTitle")}
            </h4>
            <p className="text-gray-700 mb-4">{t("services.pricingIntro")}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>{t("services.pricing1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>{t("services.pricing2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>{t("services.pricing3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>{t("services.pricing4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">
              {t("services.shippingTitle")}
            </h4>
            <p className="text-gray-700">{t("services.shippingText")}</p>
          </div>
        </div>
      </ContentSection>

      {/* Intellectual Property */}
      <ContentSection bgColor="white">
        <SectionHeader
          title={t("intellectualProperty.title")}
          subtitle={t("intellectualProperty.subtitle")}
          icon={<Shield className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("intellectualProperty.ourContentTitle")}
              </h4>
              <p className="text-gray-700">
                {t("intellectualProperty.ourContentText")}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("intellectualProperty.yourContentTitle")}
              </h4>
              <p className="text-gray-700">
                {t("intellectualProperty.yourContentText")}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("intellectualProperty.trademarksTitle")}
              </h4>
              <p className="text-gray-700">
                {t("intellectualProperty.trademarksText")}
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Limitation of Liability */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title={t("liability.title")}
          subtitle={t("liability.subtitle")}
          icon={<Scale className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {t("liability.noticeTitle")}
                </h4>
                <p className="text-gray-700 mb-0">
                  {t("liability.noticeText")}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("liability.asIsTitle")}
              </h4>
              <p className="text-gray-700">{t("liability.asIsText")}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("liability.limitationsTitle")}
              </h4>
              <p className="text-gray-700 mb-4">
                {t("liability.limitationsIntro")}
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>{t("liability.limitation1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>{t("liability.limitation2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>{t("liability.limitation3")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>{t("liability.limitation4")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("liability.maximumTitle")}
              </h4>
              <p className="text-gray-700">{t("liability.maximumText")}</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Termination */}
      <ContentSection bgColor="white">
        <SectionHeader
          title={t("termination.title")}
          subtitle={t("termination.subtitle")}
          icon={<XCircle className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("termination.byYouTitle")}
              </h4>
              <p className="text-gray-700">{t("termination.byYouText")}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("termination.byUsTitle")}
              </h4>
              <p className="text-gray-700 mb-4">{t("termination.byUsIntro")}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>{t("termination.byUs1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>{t("termination.byUs2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>{t("termination.byUs3")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0a4a9e]">•</span>
                  <span>{t("termination.byUs4")}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("termination.effectTitle")}
              </h4>
              <p className="text-gray-700">{t("termination.effectText")}</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Governing Law */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title={t("governingLaw.title")}
          subtitle={t("governingLaw.subtitle")}
          icon={<Scale className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("governingLaw.lawTitle")}
              </h4>
              <p className="text-gray-700">{t("governingLaw.lawText")}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("governingLaw.disputeTitle")}
              </h4>
              <p className="text-gray-700">{t("governingLaw.disputeText")}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {t("governingLaw.jurisdictionTitle")}
              </h4>
              <p className="text-gray-700">
                {t("governingLaw.jurisdictionText")}
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Changes to Terms */}
      <ContentSection bgColor="white">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t("changes.title")}
          </h3>
          <p className="text-gray-700 mb-4">{t("changes.text1")}</p>
          <p className="text-gray-700 mb-0">{t("changes.text2")}</p>
        </div>
      </ContentSection>

      {/* Contact Section */}
      <ContentSection bgColor="gray">
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t("contact.title")}
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@zexfro.com"
              className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300"
            >
              {t("contact.emailButton")}
            </a>
            <a
              href="/contact"
              className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              {t("contact.supportButton")}
            </a>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection bgColor="white">
        <CTABox
          title={t("cta.title")}
          description={t("cta.description")}
          buttonText={t("cta.button")}
          buttonElement={
            <RegisterModal>
              <button className="inline-block bg-white text-[#0a4a9e] font-bold px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register Now
              </button>
            </RegisterModal>
          }
        />
      </ContentSection>
    </ContentLayout>
  );
}
