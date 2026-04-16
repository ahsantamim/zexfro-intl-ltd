import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapSection } from "@/components/contact/MapSection";
import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageSEO({
    title: "Contact Us - Get in Touch",
    description:
      "Contact Zexfro International Limited for import/export inquiries, trade partnership opportunities, or general questions. Reach us by phone, email, or visit our office in Dhaka.",
    path: "/contact",
    locale,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&q=80",
    keywords: [
      "contact Zexfro",
      "trade inquiry",
      "import export contact",
      "business partnership",
      "trade consultation",
      "Zexfro office location",
    ],
  });
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Send us a message!"
        heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      />
      
      {/* Main Contact Section - Clean Two Column Layout */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Contact Info (2/5 width) */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            
            {/* Right Column - Contact Form (3/5 width) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <MapSection />
    </main>
  );
}
