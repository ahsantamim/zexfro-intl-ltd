import { DocLayout, DocSection } from "@/components/ui/DocLayout";
import {
  Package,
  BookOpen,
  FileText,
  Download,
  Video,
  Users,
  TrendingUp,
  BarChart3,
  Lightbulb,
  BookMarked,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

  return generatePageSEO({
    title: "Logistics & Supply Chain Resources",
    description:
      "Comprehensive resources for logistics and supply chain management, including guides, whitepapers, case studies, and industry insights for international trade.",
    path: "/resources/logistics-supply-chain",
    locale,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "logistics resources",
      "supply chain guides",
      "trade whitepapers",
      "logistics case studies",
      "industry insights",
      "supply chain best practices",
    ],
  });
}

const sections = [
  { id: "overview", title: "Resources Overview" },
  { id: "guides", title: "Industry Guides & Whitepapers" },
  { id: "case-studies", title: "Case Studies" },
  { id: "webinars", title: "Webinars & Training" },
  { id: "insights", title: "Market Insights & Trends" },
  { id: "tools", title: "Tools & Calculators" },
];

export default async function LogisticsResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resources" });

  return (
    <DocLayout
      sections={sections}
      pageTitle="Logistics & Supply Chain Resources"
      pageDescription="Comprehensive resources for logistics and supply chain management, including guides, whitepapers, case studies, and industry insights."
    >
      {/* Overview Section */}
      <DocSection id="overview" title="Resources Overview">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Access our comprehensive collection of resources designed to help
            you navigate the complexities of international logistics and supply
            chain management. From detailed guides to industry insights, find
            everything you need to optimize your trade operations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Educational Resources
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive guides, tutorials, and documentation to enhance
                your knowledge.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <TrendingUp className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Market Intelligence
              </h3>
              <p className="text-sm text-gray-600">
                Stay informed with the latest market trends and industry
                analysis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <Lightbulb className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Best Practices</h3>
              <p className="text-sm text-gray-600">
                Learn from real-world examples and proven strategies for
                success.
              </p>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Guides & Whitepapers Section */}
      <DocSection id="guides" title="Industry Guides & Whitepapers">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Download our in-depth guides and whitepapers covering various
            aspects of international trade, logistics, and supply chain
            management.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Complete Guide to International Shipping
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    A comprehensive guide covering everything from shipping
                    methods to documentation requirements and cost optimization
                    strategies.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">PDF • 45 pages</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Supply Chain Optimization Strategies
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Learn how to streamline your supply chain operations, reduce
                    costs, and improve efficiency with proven optimization
                    techniques.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">PDF • 32 pages</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Customs Compliance Best Practices
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Navigate international customs regulations with confidence
                    using our detailed compliance guide and checklist.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">PDF • 28 pages</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Risk Management in International Trade
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Identify and mitigate risks in global trade with our
                    comprehensive risk management framework and strategies.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">PDF • 38 pages</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Case Studies Section */}
      <DocSection id="case-studies" title="Case Studies">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Learn from real-world success stories and see how businesses have
            transformed their logistics and supply chain operations.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <Package className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Electronics Manufacturer Reduces Shipping Costs by 35%
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Discover how a mid-sized electronics manufacturer optimized
                    their international shipping routes and reduced costs while
                    maintaining delivery speed.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                      Cost Reduction
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                      Route Optimization
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                      Electronics
                    </span>
                  </div>
                  <Link
                    href="/case-study"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Fashion Retailer Streamlines Supply Chain Operations
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    See how a growing fashion retailer improved inventory
                    management and reduced lead times by 40% with our integrated
                    logistics solutions.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-3">
                    <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                      Supply Chain
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                      Inventory Management
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                      Fashion
                    </span>
                  </div>
                  <Link
                    href="/case-study"
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Food & Beverage Company Achieves 99.8% On-Time Delivery
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Learn how a food importer improved delivery reliability and
                    customer satisfaction with advanced tracking and
                    temperature-controlled logistics.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-3">
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                      Reliability
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                      Cold Chain
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                      Food & Beverage
                    </span>
                  </div>
                  <Link
                    href="/case-study"
                    className="text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Webinars & Training Section */}
      <DocSection id="webinars" title="Webinars & Training">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Join our webinars and training sessions to stay updated on industry
            trends and learn best practices from logistics experts.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <Video className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">
                    LIVE
                  </span>
                  <span className="text-sm text-gray-500">
                    Feb 15, 2026 • 2:00 PM GMT
                  </span>
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Navigating Post-Brexit Trade Regulations
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Join our experts as they discuss the latest changes in trade
                  regulations and their impact on international shipping.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Register Now →
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <Video className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                    ON-DEMAND
                  </span>
                  <span className="text-sm text-gray-500">45 minutes</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Digital Transformation in Supply Chain
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Explore how digital technologies are revolutionizing supply
                  chain management and logistics operations.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Watch Now →
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                    WORKSHOP
                  </span>
                  <span className="text-sm text-gray-500">Mar 5-6, 2026</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Advanced Customs Compliance Training
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  A comprehensive 2-day workshop covering advanced customs
                  procedures, documentation, and compliance strategies.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Learn More →
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <Video className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                    ON-DEMAND
                  </span>
                  <span className="text-sm text-gray-500">30 minutes</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Sustainable Logistics Practices
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Learn about eco-friendly shipping methods and how to reduce
                  your carbon footprint in international trade.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Watch Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Market Insights Section */}
      <DocSection id="insights" title="Market Insights & Trends">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Stay ahead with our latest market insights, industry reports, and
            trend analysis.
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Global Shipping Rates Trend Report - Q1 2026
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Analysis of shipping rate fluctuations across major trade
                    routes and predictions for the upcoming quarter.
                  </p>
                  <span className="text-xs text-gray-500">
                    Published: Jan 10, 2026
                  </span>
                </div>
                <BookMarked className="w-8 h-8 text-blue-600 flex-shrink-0" />
              </div>
            </div>

            <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded-r-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    E-Commerce Logistics: 2026 Outlook
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Insights into the evolving e-commerce logistics landscape
                    and emerging technologies shaping the future.
                  </p>
                  <span className="text-xs text-gray-500">
                    Published: Jan 5, 2026
                  </span>
                </div>
                <BookMarked className="w-8 h-8 text-purple-600 flex-shrink-0" />
              </div>
            </div>

            <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded-r-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Supply Chain Resilience in 2026
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Strategies for building resilient supply chains in the face
                    of global disruptions and market volatility.
                  </p>
                  <span className="text-xs text-gray-500">
                    Published: Dec 20, 2025
                  </span>
                </div>
                <BookMarked className="w-8 h-8 text-green-600 flex-shrink-0" />
              </div>
            </div>

            <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded-r-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Emerging Markets: Trade Opportunities in Asia
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Explore growing trade opportunities and market dynamics in
                    key Asian economies for 2026.
                  </p>
                  <span className="text-xs text-gray-500">
                    Published: Dec 15, 2025
                  </span>
                </div>
                <BookMarked className="w-8 h-8 text-orange-600 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Tools & Calculators Section */}
      <DocSection id="tools" title="Tools & Calculators">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Use our free tools and calculators to make informed decisions about
            your logistics and shipping operations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Shipping Cost Calculator
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Estimate shipping costs based on weight, dimensions, and
                destination.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Launch Tool →
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">ROI Calculator</h4>
              <p className="text-sm text-gray-600 mb-4">
                Calculate the return on investment for your logistics
                optimization projects.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Launch Tool →
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Transit Time Estimator
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Get accurate transit time estimates for international shipments.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Launch Tool →
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">HS Code Finder</h4>
              <p className="text-sm text-gray-600 mb-4">
                Quickly find the correct HS codes for your products.
              </p>
              <Link
                href="/hs-code"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Launch Tool →
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Packaging Optimizer
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Optimize your packaging to reduce costs and improve efficiency.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Launch Tool →
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Carbon Footprint Calculator
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Calculate and track the environmental impact of your shipments.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Launch Tool →
              </button>
            </div>
          </div>
        </div>
      </DocSection>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Need Personalized Guidance?
        </h3>
        <p className="text-lg mb-6 text-blue-50 max-w-2xl mx-auto">
          Our logistics experts are here to help you navigate complex supply
          chain challenges and find the best solutions for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Our Experts
          </Link>
          <Link
            href="/blog"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500"
          >
            Visit Our Blog
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
