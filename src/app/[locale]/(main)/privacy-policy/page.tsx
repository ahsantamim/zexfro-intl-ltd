import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader,
  CTABox 
} from "@/components/ui/ContentLayout";
import { 
  Shield, 
  Lock, 
  Eye,
  FileText,
  UserCheck,
  Database,
  Cookie,
  Mail
} from "lucide-react";

import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Privacy Policy - Data Protection & Privacy",
    description:
      "Learn how Zexfro protects your personal information and maintains your privacy. Our commitment to data security and transparency in international trade.",
    path: "/privacy-policy",
    locale,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "privacy policy",
      "data protection",
      "personal information security",
      "trade data privacy",
      "GDPR compliance",
    ],
  });
}

export default function PrivacyPolicyPage() {
  return (
    <ContentLayout
      pageTitle="Privacy Policy"
      pageDescription="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our services."
      heroImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80"
    >
      {/* Introduction */}
      <ContentSection bgColor="white">
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-[#0a4a9e] p-6 mb-8">
            <p className="text-gray-700 mb-2">
              <strong>Last Updated:</strong> January 4, 2026
            </p>
            <p className="text-gray-700 mb-0">
              <strong>Effective Date:</strong> January 1, 2026
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Zexfro ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <p className="text-gray-700">
            By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
          </p>
        </div>
      </ContentSection>

      {/* Information We Collect */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Information We Collect"
          subtitle="Understanding what data we gather and how it helps us serve you better"
          icon={<Database className="w-7 h-7 text-white" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-600 text-sm">Information you provide directly to us</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Name and contact details (email, phone, address)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Company information and business details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Account credentials and login information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Payment and billing information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Shipping and delivery addresses</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-600 text-sm">Data collected through your use of our services</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>IP address and device information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Browser type and operating system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Pages visited and time spent on our website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Referring website and search terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0a4a9e]">•</span>
                <span>Cookies and similar tracking technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* How We Use Your Information */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="How We Use Your Information"
          subtitle="The purposes for which we process your personal data"
          icon={<FileText className="w-7 h-7 text-white" />}
        />

        <div className="space-y-6 mt-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <h4 className="font-bold text-gray-900 mb-3">Service Delivery</h4>
            <p className="text-gray-700">
              To provide, maintain, and improve our import/export services, process your orders and transactions, manage your account, and communicate with you about your shipments and orders.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <h4 className="font-bold text-gray-900 mb-3">Communication</h4>
            <p className="text-gray-700">
              To send you service updates, newsletters, marketing materials (with your consent), respond to your inquiries and customer support requests, and notify you about changes to our services or policies.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
            <h4 className="font-bold text-gray-900 mb-3">Security & Compliance</h4>
            <p className="text-gray-700">
              To protect against fraudulent, unauthorized, or illegal activity, ensure compliance with legal obligations and regulatory requirements, and enforce our terms and conditions.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6">
            <h4 className="font-bold text-gray-900 mb-3">Analytics & Improvement</h4>
            <p className="text-gray-700">
              To analyze website usage and trends, improve our services and user experience, develop new features and functionality, and conduct research and analysis.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Data Protection & Security */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Data Protection & Security"
          subtitle="How we safeguard your information"
          icon={<Shield className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Encryption & Security Measures</h4>
                  <p className="text-gray-600 text-sm">
                    We use industry-standard SSL/TLS encryption to protect data in transit. All sensitive information is encrypted at rest using advanced encryption standards (AES-256).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Access Controls</h4>
                  <p className="text-gray-600 text-sm">
                    Strict access controls ensure only authorized personnel can access your personal information on a need-to-know basis for business purposes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Regular Audits</h4>
                  <p className="text-gray-600 text-sm">
                    We conduct regular security audits and vulnerability assessments to identify and address potential security risks proactively.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Employee Training</h4>
                  <p className="text-gray-600 text-sm">
                    All employees receive regular training on data protection, privacy best practices, and our security policies and procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Cookies Policy */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Cookies & Tracking Technologies"
          subtitle="How we use cookies to enhance your experience"
          icon={<Cookie className="w-7 h-7 text-white" />}
        />

        <div className="prose prose-lg max-w-none mt-8">
          <p className="text-gray-700">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Essential Cookies</h4>
              <p className="text-sm text-gray-700">
                Required for the website to function properly. These cookies enable core functionality such as security, authentication, and accessibility.
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Analytics Cookies</h4>
              <p className="text-sm text-gray-700">
                Help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Marketing Cookies</h4>
              <p className="text-sm text-gray-700">
                Used to track visitors across websites to display relevant advertisements and encourage them to take actions.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-6">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </div>
      </ContentSection>

      {/* Your Rights */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Your Privacy Rights"
          subtitle="Control over your personal information"
          icon={<UserCheck className="w-7 h-7 text-white" />}
        />

        <div className="bg-white rounded-lg p-8 border border-gray-200 mt-8">
          <p className="text-gray-700 mb-6">
            Depending on your location and applicable data protection laws, you may have the following rights regarding your personal information:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Right to Access</h4>
                <p className="text-gray-600 text-sm">
                  Request a copy of the personal information we hold about you and information about how we process it.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Right to Rectification</h4>
                <p className="text-gray-600 text-sm">
                  Request that we correct any inaccurate or incomplete personal information we hold about you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Right to Erasure</h4>
                <p className="text-gray-600 text-sm">
                  Request deletion of your personal information in certain circumstances, such as when it's no longer necessary for the purposes collected.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-orange-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Right to Object</h4>
                <p className="text-gray-600 text-sm">
                  Object to our processing of your personal information for direct marketing purposes or based on legitimate interests.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 font-bold text-sm">5</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Right to Data Portability</h4>
                <p className="text-gray-600 text-sm">
                  Request a copy of your personal information in a structured, commonly used, and machine-readable format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Contact Section */}
      <ContentSection bgColor="white">
        <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">Questions About Your Privacy?</h3>
              <p className="text-white/90 mb-6">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="mailto:privacy@zexfro.com"
                  className="inline-block bg-white text-[#0a4a9e] font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300"
                >
                  privacy@zexfro.com
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection bgColor="gray">
        <CTABox
          title="Ready to Get Started?"
          description="Join thousands of businesses that trust Zexfro for secure and compliant global trade operations."
          buttonText="Start Trading Today"
          buttonLink="/register"
        />
      </ContentSection>
    </ContentLayout>
  );
}

