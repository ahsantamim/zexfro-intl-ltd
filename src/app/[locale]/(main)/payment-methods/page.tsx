import { PageHeader } from "@/components/ui/PageHeader";
import { CreditCard, Phone, Mail, MessageSquare, AlertCircle } from "lucide-react";
import Link from "next/link";
import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Payment Methods - Secure Trade Transactions",
    description:
      "Learn about Zexfro International Limited's payment methods. Secure and flexible payment processing including bank transfers and manual verification for international trade transactions.",
    path: "/payment-methods",
    locale,
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "trade payment methods",
      "international payment",
      "secure trade payment",
      "bank transfer trade",
      "import export payment",
      "trade transaction security",
    ],
  });
}

export default function PaymentMethodsPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Payment Methods"
        description="Secure and flexible payment processing for international trade"
      />

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Notice Box */}
          <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 rounded-r-lg mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#0a4a9e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Manual Payment Processing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At Zexfro International Limited, we currently handle all payments manually
                  to ensure the highest level of security, personalized service, and
                  compliance with international trade regulations. This approach allows us to
                  provide customized payment solutions tailored to your specific business
                  needs.
                </p>
              </div>
            </div>
          </div>

          {/* Why Manual Processing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Manual Payment Processing?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our manual payment process ensures that every transaction receives personal
                attention and verification. This method provides several key advantages:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#0a4a9e] font-bold text-xl">•</span>
                  <span>
                    <strong>Enhanced Security:</strong> Each transaction is personally
                    reviewed and verified by our finance team
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0a4a9e] font-bold text-xl">•</span>
                  <span>
                    <strong>Flexible Payment Terms:</strong> Customized payment schedules
                    and methods based on your business requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0a4a9e] font-bold text-xl">•</span>
                  <span>
                    <strong>Regulatory Compliance:</strong> Full adherence to international
                    banking and trade regulations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0a4a9e] font-bold text-xl">•</span>
                  <span>
                    <strong>Direct Communication:</strong> Work directly with our finance
                    team for any payment-related questions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0a4a9e] font-bold text-xl">•</span>
                  <span>
                    <strong>Fraud Prevention:</strong> Manual verification helps prevent
                    fraudulent transactions
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Accepted Payment Methods */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Accepted Payment Methods
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We support various payment methods commonly used in international trade,
              including but not limited to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Letter of Credit (LC)</h4>
                <p className="text-sm text-gray-600">
                  Bank-guaranteed payment for secure large transactions
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Telegraphic Transfer (TT)
                </h4>
                <p className="text-sm text-gray-600">
                  Direct bank-to-bank wire transfer for fast payments
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Cash Against Documents (CAD)
                </h4>
                <p className="text-sm text-gray-600">
                  Payment upon receipt of shipping documents
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Documents Against Payment (DP)
                </h4>
                <p className="text-sm text-gray-600">
                  Documents released upon payment confirmation
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Documents Against Acceptance (DA)
                </h4>
                <p className="text-sm text-gray-600">
                  Deferred payment terms after document acceptance
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">International Bank Transfer</h4>
                <p className="text-sm text-gray-600">
                  Traditional wire transfers through banking channels
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We also offer custom payment arrangements for long-term partners and special
              circumstances. Our team will work with you to establish payment terms that suit
              both parties.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <CreditCard className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Need Payment Information?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Our finance team is ready to discuss payment options, answer your questions,
                and help you establish the best payment solution for your international trade
                transactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-sm text-white/80 mb-2">Mon-Fri, 9AM-6PM</p>
                <p className="font-bold">+1 (555) 123-4567</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-sm text-white/80 mb-2">24-hour response time</p>
                <a
                  href="mailto:payments@zexfro.com"
                  className="font-bold hover:underline"
                >
                  payments@zexfro.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <MessageSquare className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Contact Form</h4>
                <p className="text-sm text-white/80 mb-2">Quick inquiry form</p>
                <Link href="/contact" className="font-bold hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Payment Security & Compliance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All transactions are processed in strict compliance with international banking
              regulations, anti-money laundering (AML) laws, and trade finance standards. We
              maintain the highest levels of security and confidentiality for all financial
              information. Every transaction is verified through secure banking channels and
              undergoes thorough Know Your Customer (KYC) procedures.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
