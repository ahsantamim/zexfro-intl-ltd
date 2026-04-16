import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import {
  Package,
  Plane,
  Ship,
  FileCheck,
  MonitorDot,
  Network,
  Truck,
  Globe,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  const t = await getTranslations({ locale, namespace: "logisticsSupport" });

  return generatePageSEO({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/logistics-support",
    locale,
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "logistics support",
      "shipping support",
      "freight management",
      "cargo tracking",
      "delivery logistics",
      "trade logistics",
    ],
  });
}

export default async function LogisticsSupplyChainPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "logisticsSupport" });

  const sections = [
    { id: "overview", title: t("sections.overview") },
    { id: "freight", title: t("sections.freight") },
    { id: "transportation", title: t("sections.transportation") },
    { id: "customs", title: t("sections.customs") },
    { id: "warehousing", title: t("sections.warehousing") },
    { id: "tracking", title: t("sections.tracking") },
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
            <Globe className="w-6 h-6 text-[#0a4a9e]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("overview.title")}
            </h3>
            <p className="text-gray-600">{t("overview.subtitle")}</p>
          </div>
        </div>

        <p>
          Zexfro International Ltd provides comprehensive logistics and supply
          chain support services that ensure seamless international trade
          operations. Our end-to-end logistics solutions cover every aspect of
          global shipping, from initial freight planning to final delivery.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80"
            alt="Logistics and supply chain management"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              Comprehensive Logistics Solutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("overview.freightTitle")}
            </h4>
            <p className="text-sm text-gray-700">{t("overview.freightDesc")}</p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("overview.warehousingTitle")}
            </h4>
            <p className="text-sm text-gray-700">
              {t("overview.warehousingDesc")}
            </p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("overview.customsTitle")}
            </h4>
            <p className="text-sm text-gray-700">{t("overview.customsDesc")}</p>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <MonitorDot className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("overview.trackingTitle")}
            </h4>
            <p className="text-sm text-gray-700">
              {t("overview.trackingDesc")}
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Network className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("overview.networkTitle")}
            </h4>
            <p className="text-sm text-gray-700">{t("overview.networkDesc")}</p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">
              {t("overview.riskTitle")}
            </h4>
            <p className="text-sm text-gray-700">{t("overview.riskDesc")}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">End-to-End Logistics Solutions</p>
          <p className="mt-2 text-white/90">
            From origin to destination, we manage every step of your supply
            chain with precision and care.
          </p>
        </div>
      </DocSection>

      {/* Section 2: International Freight Management */}
      <DocSection id="freight" title={t("sections.freight")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Optimized Freight Solutions for Global Trade
            </h3>
            <p className="text-gray-600">
              Strategic freight management ensuring cost-effective and timely
              delivery of goods worldwide.
            </p>
          </div>
        </div>

        <p>
          Our international freight management services are designed to optimize
          your shipping operations while minimizing costs. We leverage our
          extensive network of carriers and freight forwarders to secure the
          best rates and routes for your shipments.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt="International freight management"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Strategic Freight Planning</p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-3">
            Our Freight Management Capabilities:
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <strong>Carrier Selection & Negotiation:</strong> Access to
                multiple shipping lines with competitive rates
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <strong>Route Optimization:</strong> Strategic planning for
                fastest and most cost-effective routes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <strong>Container Management:</strong> FCL and LCL consolidation
                services
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                <strong>Cargo Insurance:</strong> Comprehensive coverage for
                shipment protection
              </span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white border-2 border-green-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              Benefits for Importers
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Reduced shipping costs through volume discounts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Faster transit times with priority routing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Flexible scheduling options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Comprehensive cargo protection</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-green-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              Benefits for Exporters
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Access to global shipping networks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Streamlined booking and documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Reliable delivery guarantees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✔</span>
                <span>Complete freight visibility</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">
            Optimized Freight, Maximized Value
          </p>
          <p className="mt-2 text-white/90">
            Our strategic freight management delivers the perfect balance of
            speed, cost, and reliability.
          </p>
        </div>
      </DocSection>

      {/* Section 3: Multi-Modal Transportation */}
      <DocSection id="transportation" title={t("sections.transportation")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("transportation.title")}
            </h3>
            <p className="text-gray-600">{t("transportation.subtitle")}</p>
          </div>
        </div>

        <p>
          We offer flexible multi-modal transportation solutions tailored to
          your specific needs, timeline, and budget. Whether you need air
          freight for urgent shipments, sea freight for cost-effective bulk
          transport, or land freight for regional distribution, we have you
          covered.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80"
            alt={t("transportation.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#0a4a9e]">
                  {t("transportation.stat1")}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {t("transportation.stat1Label")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0a4a9e]">
                  {t("transportation.stat2")}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {t("transportation.stat2Label")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0a4a9e]">
                  {t("transportation.stat3")}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {t("transportation.stat3Label")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 my-8">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Plane className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {t("transportation.airTitle")}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {t("transportation.airDesc")}
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Express delivery for time-sensitive cargo</li>
                  <li>• Global airport network coverage</li>
                  <li>• Temperature-controlled options available</li>
                  <li>• Priority handling and customs clearance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Ship className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {t("transportation.seaTitle")}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {t("transportation.seaDesc")}
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Cost-effective for large volume shipments</li>
                  <li>
                    • FCL (Full Container Load) and LCL (Less than Container
                    Load) options
                  </li>
                  <li>• Major port connections worldwide</li>
                  <li>
                    • Specialized container types (reefer, flat rack, etc.)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {t("transportation.landTitle")}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {t("transportation.landDesc")}
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Efficient regional and cross-border delivery</li>
                  <li>• Road and rail transportation options</li>
                  <li>• Last-mile delivery capabilities</li>
                  <li>• Door-to-door service available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">The Right Mode for Every Shipment</p>
          <p className="mt-2 text-white/90">
            Choose from air, sea, or land freight—or combine them for optimal
            results.
          </p>
        </div>
      </DocSection>

      {/* Section 4: Customs Clearance */}
      <DocSection id="customs" title={t("sections.customs")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileCheck className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Expert Customs Handling for Smooth Clearance
            </h3>
            <p className="text-gray-600">{t("overview.customsDesc")}</p>
          </div>
        </div>

        <p>
          Navigating customs regulations can be complex and time-consuming. Our
          expert customs clearance services ensure that your shipments pass
          through customs smoothly and efficiently, minimizing delays and
          avoiding costly penalties.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            alt="Customs clearance and documentation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Expert Customs Management</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-4">
            Complete Documentation Support:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Commercial Invoice:</strong> Accurate transaction
                  documentation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Packing List:</strong> Detailed cargo specifications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Bill of Lading:</strong> Transport document and title
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Certificate of Origin:</strong> Source country
                  verification
                </span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>HS Code Classification:</strong> Proper tariff
                  determination
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Import/Export Licenses:</strong> Required permits and
                  authorizations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Phytosanitary Certificates:</strong> For agricultural
                  products
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Customs Declarations:</strong> Accurate and compliant
                  filing
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl mb-3">📋</div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm">
              Accurate Documentation
            </h4>
            <p className="text-xs text-gray-600">
              100% compliance with customs requirements
            </p>
          </div>
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm">
              Fast Clearance
            </h4>
            <p className="text-xs text-gray-600">
              Expedited processing for minimal delays
            </p>
          </div>
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm">
              Duty Optimization
            </h4>
            <p className="text-xs text-gray-600">
              Strategic planning to minimize costs
            </p>
          </div>
          <div className="bg-white border-2 border-yellow-600 rounded-lg p-4 text-center">
            <div className="text-3xl mb-3">🔍</div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm">
              Compliance Assurance
            </h4>
            <p className="text-xs text-gray-600">
              Zero penalties with expert handling
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Seamless Customs Clearance</p>
          <p className="mt-2 text-white/90">
            Expert documentation and customs management ensuring smooth,
            penalty-free clearance.
          </p>
        </div>
      </DocSection>

      {/* Section 5: Warehousing */}
      <DocSection id="warehousing" title={t("sections.warehousing")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Secure Storage & Efficient Distribution
            </h3>
            <p className="text-gray-600">{t("overview.warehousingDesc")}</p>
          </div>
        </div>

        <p>
          Our warehousing and distribution services provide secure,
          cost-effective storage solutions with flexible options for short-term
          and long-term needs. We offer strategically located facilities with
          modern inventory management systems.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80"
            alt="Warehousing and distribution facilities"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">Modern Warehouse Facilities</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Warehouse Services</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Secure Storage:</strong> 24/7 surveillance and access
                  control
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Inventory Management:</strong> Real-time tracking and
                  reporting
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Cross-Docking:</strong> Quick transfer and
                  distribution
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Special Handling:</strong> Temperature-controlled
                  storage available
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              Distribution Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Order Fulfillment:</strong> Pick, pack, and ship
                  services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Last-Mile Delivery:</strong> Direct to customer
                  doorstep
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Nationwide Network:</strong> Coverage across
                  Bangladesh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Returns Management:</strong> Reverse logistics support
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-white text-center">
          <p className="text-xl font-bold">Your Inventory, Our Priority</p>
          <p className="mt-2 text-white/90">
            Secure warehousing and efficient distribution to keep your supply
            chain moving.
          </p>
        </div>
      </DocSection>

      {/* Section 6: Tracking */}
      <DocSection id="tracking" title={t("sections.tracking")}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <MonitorDot className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Complete Visibility Throughout Your Supply Chain
            </h3>
            <p className="text-gray-600">{t("overview.trackingDesc")}</p>
          </div>
        </div>

        <p>
          Stay informed about your shipments with our advanced real-time
          tracking and monitoring systems. From the moment your cargo leaves the
          origin until it reaches its final destination, you'll have complete
          visibility and control.
        </p>

        {/* Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl my-8">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            alt="Real-time tracking and monitoring systems"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-semibold">
              Advanced Tracking Technology
            </p>
          </div>
        </div>

        <div className="bg-teal-50/30 border-l-4 border-teal-500 p-6 my-6 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-3">Tracking Features:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  <strong>GPS Location Tracking:</strong> Real-time position
                  updates
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  <strong>Milestone Notifications:</strong> Automated status
                  alerts
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  <strong>ETA Updates:</strong> Dynamic arrival time estimates
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  <strong>Customs Status:</strong> Clearance progress monitoring
                </span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  <strong>Delay Alerts:</strong> Immediate notification of
                  issues
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  <strong>Document Tracking:</strong> Digital access to all
                  paperwork
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  <strong>Multi-Shipment Dashboard:</strong> Manage all orders
                  in one place
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  <strong>Historical Reports:</strong> Complete shipment history
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("benefits.efficiencyTitle")}
                </h3>
                <p className="text-gray-600">{t("benefits.efficiencyDesc")}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("benefits.securityTitle")}
                </h3>
                <p className="text-gray-600">{t("benefits.securityDesc")}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MonitorDot className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("benefits.transparencyTitle")}
                </h3>
                <p className="text-gray-600">
                  {t("benefits.transparencyDesc")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Network className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("benefits.reachTitle")}
                </h3>
                <p className="text-gray-600">{t("benefits.reachDesc")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-6 text-white text-center mb-8">
          <p className="text-xl font-bold">
            Total Transparency, Complete Control
          </p>
          <p className="mt-2 text-white/90">
            Monitor every step of your shipment journey with our advanced
            tracking technology.
          </p>
        </div>

        {/* Call-to-Action box */}
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white">
          <h4 className="text-2xl font-bold mb-4">{t("cta.title")}</h4>
          <p className="mb-6 text-white/90">{t("cta.description")}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            {t("cta.button")}
          </Link>
        </div>
      </DocSection>
    </DocLayout>
  );
}
