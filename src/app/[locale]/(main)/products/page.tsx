"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { ProductsFilter } from "@/components/products/ProductsFilter";
import { RegisterModal } from "@/components/home/RegisterModal";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<"import" | "export">("import");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Reset category when switching tabs
  const handleTabChange = (tab: "import" | "export") => {
    setActiveTab(tab);
    setSelectedCategory("");
    setSearchQuery("");
  };

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Our Products"
        description="Discover our comprehensive range of export and import products connecting businesses across borders"
        heroImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80"
      />

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <ProductsFilter
            activeTab={activeTab}
            onTabChange={handleTabChange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <div className="mt-12">
            <ProductsGrid
              activeTab={activeTab}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              categorySlug={selectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Import Info */}
            <div className="space-y-6">
              <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full inline-block">
                Import Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Global Products at Your Doorstep
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We source and import high-quality products from verified
                suppliers worldwide. Our import services cover everything from
                electronics and machinery to consumer goods and industrial
                equipment, ensuring you get the best products at competitive
                prices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0a4a9e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Verified international suppliers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0a4a9e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Quality inspection before shipping
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0a4a9e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Complete customs clearance support
                  </span>
                </li>
              </ul>
            </div>

            {/* Export Info */}
            <div className="space-y-6">
              <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full inline-block">
                Export Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Take Your Products Global
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Export your products to international markets with confidence.
                We handle all aspects of the export process, from documentation
                to shipping, ensuring your products reach global customers
                efficiently and compliantly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0a4a9e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Market research and buyer identification
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0a4a9e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Export documentation and compliance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0a4a9e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Logistics and delivery to 150+ countries
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <span className="text-white font-semibold text-sm uppercase tracking-wider bg-white/20 px-4 py-2 rounded-full inline-block mb-6">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto">
            Contact us today to discuss your import or export requirements and
            discover how we can help your business grow globally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-[#0a4a9e] hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <RegisterModal>
              <button className="group inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a4a9e] font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </RegisterModal>
          </div>
        </div>
      </section>
    </main>
  );
}
