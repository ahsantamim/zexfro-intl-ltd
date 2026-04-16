import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader,
  FeatureCard,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  Target,
  TrendingUp,
  CheckCircle2,
  Globe,
  Package,
  Award,
  Users,
  BarChart3
} from "lucide-react";
import Image from "next/image";

import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Case Study - Import Export Success Story",
    description:
      "Discover how Zexfro International Limited successfully scaled its import-export operations, achieving 40% growth in distribution network and 35% export revenue contribution.",
    path: "/case-study",
    locale,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "trade case study",
      "import export success",
      "business growth story",
      "distribution network growth",
      "export revenue",
      "Zexfro success",
    ],
  });
}

export default function CaseStudyPage() {
  return (
    <ContentLayout
      pageTitle="Case Study"
      pageDescription="Global Import–Export, Distribution & Local Market Expansion"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
    >
      {/* Company Overview */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Zexfro International Limited
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">Company</h3>
              <p className="text-gray-700">Global Import–Export, Distribution & Local Market Expansion</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Uttara, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 text-white mb-12">
            <h3 className="font-bold text-xl mb-3">Business Model</h3>
            <p className="text-white/90">
              Imports diversified products, distributes in local markets in Bangladesh, and exports Bangladesh goods to global markets.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Background */}
      <ContentSection bgColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Background"
              subtitle="Our journey and mission"
            />
            <p className="text-gray-700 leading-relaxed mt-6">
              Zexfro International Limited was founded with the mission to bridge Bangladeshi international suppliers and buyers while ensuring high product quality and competitive pricing.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The company operates across multiple sectors including veterinary products, agricultural equipment, garment goods, cosmetics, and industrial machineries. Over time, Zexfro developed a strong logistics backbone, regulatory compliance framework, and local distribution network, enabling it to scale efficiently.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
              alt="Business background"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Business Challenge */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Business Challenge"
          subtitle="Key obstacles we faced"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Complex Regulations</h3>
                <p className="text-gray-700">Complex import regulations and documentation requirements in Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-700">Maintaining quality assurance across diverse product lines from multiple global suppliers</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Market Trust</h3>
                <p className="text-gray-700">Establishing market trust for foreign-sourced products in the local market</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Globe className="w-6 h-6 text-[#0a4a9e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">International Buyers</h3>
                <p className="text-gray-700">Ensuring reliable international buyers for Bangladesh export products</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Strategic Approach */}
      <ContentSection bgColor="blue">
        <SectionHeader
          title="Strategic Approach"
          subtitle="How we addressed the challenges"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Global Supplier Network"
            description="Partnerships with certified manufacturers in Asia, Europe, Middle East ensured consistency in sourcing, compliance, and supply reliability."
            color="blue"
          />
          <FeatureCard
            icon={<CheckCircle2 className="w-6 h-6" />}
            title="Quality Control"
            description="Each shipment underwent third-party inspection and verification to meet Bangladesh import standards."
            color="green"
          />
          <FeatureCard
            icon={<Package className="w-6 h-6" />}
            title="Local Distribution"
            description="Formed a reliable network of distributors and retailers across major cities in Bangladesh."
            color="purple"
          />
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title="Compliance & Documentation"
            description="Managed customs clearance, LC documentation, and regulatory approvals efficiently to avoid delays."
            color="orange"
          />
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title="Marketing Penetration"
            description="Identified niche markets, built product awareness, focused on value-based positioning."
            color="blue"
          />
          <FeatureCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Growth Strategy"
            description="Continuous improvement and expansion across multiple product categories and markets."
            color="green"
          />
        </div>
      </ContentSection>

      {/* Execution - Import Operations */}
      <ContentSection bgColor="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80"
              alt="Import operations"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeader
              title="Execution: Import Operations"
              subtitle="Strategic sourcing and distribution"
            />

            <div className="mt-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Zexfro imported veterinary products, agricultural machinery, medical equipment, cosmetics, and industrial machinery from <strong>China, Turkey, UAE, Italy, and India</strong>.
              </p>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-3">Key Activities:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Products cleared through LC-based imports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Complied with BSTI, DGDA, and other relevant authorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Distributed to dealers nationwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Execution - Export Operations */}
      <ContentSection bgColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Execution: Export Operations"
              subtitle="Bangladesh to the world"
            />

            <div className="mt-6 space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                The company ensured compliance with destination-specific requirements and managed exports from Chattogram port documentation & freight forwarding.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                  <Globe className="w-5 h-5 text-[#0a4a9e] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Jute products</p>
                    <p className="text-sm text-gray-600">To Turkey and Egypt</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                  <Globe className="w-5 h-5 text-[#0a4a9e] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Leather goods</p>
                    <p className="text-sm text-gray-600">To Italy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                  <Globe className="w-5 h-5 text-[#0a4a9e] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">RMG (Ready-Made Garments) accessories</p>
                    <p className="text-sm text-gray-600">To UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                  <Globe className="w-5 h-5 text-[#0a4a9e] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Agricultural dried foods</p>
                    <p className="text-sm text-gray-600">To Malaysia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
              alt="Export operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Results & Impact */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Results & Impact"
          subtitle="Measurable success across all business segments"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white text-center">
            <BarChart3 className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">40%</div>
            <p className="text-sm text-white/90">Increase in reseller network within 12 months</p>
            <p className="text-xs text-white/70 mt-2">Import Distribution</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">25%</div>
            <p className="text-sm text-white/90">Repeat order growth due to QA assurance</p>
            <p className="text-xs text-white/70 mt-2">Market Trust</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center">
            <Package className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">92%</div>
            <p className="text-sm text-white/90">On-time delivery rate even during supply chain disruption</p>
            <p className="text-xs text-white/70 mt-2">Delivery Efficiency</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white text-center">
            <Globe className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">35%</div>
            <p className="text-sm text-white/90">Revenue contribution from exports in 2023</p>
            <p className="text-xs text-white/70 mt-2">Export Growth</p>
          </div>

          <div className="bg-gradient-to-br from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">✓</div>
            <p className="text-sm text-white/90">Improved brand credibility through after-sales support</p>
            <p className="text-xs text-white/70 mt-2">Customer Satisfaction</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-6 text-white text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">100%</div>
            <p className="text-sm text-white/90">Compliance with regulatory standards</p>
            <p className="text-xs text-white/70 mt-2">Quality Assurance</p>
          </div>
        </div>
      </ContentSection>

      {/* Key Learnings */}
      <ContentSection bgColor="blue">
        <SectionHeader
          title="Key Learnings"
          subtitle="Insights from our journey"
          centered
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#0a4a9e] font-bold">1</span>
              </div>
              <p className="text-gray-700 pt-2">
                Local market success requires <strong>education and product availability</strong>, not just product quality.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <p className="text-gray-700 pt-2">
                <strong>Compliance readiness</strong> is a competitive advantage for importers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <p className="text-gray-700 pt-2">
                <strong>Supplier diversification</strong> reduces risk during global logistics instability.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <p className="text-gray-700 pt-2">
                Bangladesh products have <strong>strong demand abroad</strong> when targeted correctly in niche markets.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Conclusion */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conclusion
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Zexfro International Limited successfully positioned itself as a <strong>trusted global sourcing and distribution partner</strong> by combining quality assurance, compliance excellence, strong logistics, and deep market penetration strategies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Its dual focus on <strong>import distribution in Bangladesh</strong> and <strong>exporting local Bangladeshi products globally</strong> has established it as a scalable and sustainable international trading company.
          </p>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection bgColor="gray">
        <CTABox
          title="Want to Achieve Similar Results?"
          description="Partner with Zexfro International Limited and experience the same level of excellence, compliance, and growth in your international trade operations."
          buttonText="Get Started Today"
          buttonLink="/contact"
        />
      </ContentSection>
    </ContentLayout>
  );
}

