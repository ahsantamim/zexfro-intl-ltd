"use client";

import {
  ContentLayout,
  ContentSection,
  SectionHeader,
  FeatureCard,
  CTABox,
} from "@/components/ui/ContentLayout";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Globe,
  Award,
  Clock,
  DollarSign,
  Coffee,
  GraduationCap,
  Rocket,
  Target,
  CheckCircle2,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description:
      "Industry-leading compensation packages with performance bonuses and regular reviews",
    color: "blue",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, mental wellness programs, and fitness benefits",
    color: "green",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "Work-life balance with flexible schedules and remote work options",
    color: "yellow",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:
      "Continuous training programs, certifications, and career advancement opportunities",
    color: "red",
  },
  {
    icon: Coffee,
    title: "Great Work Culture",
    description:
      "Collaborative environment with team events, celebrations, and open communication",
    color: "blue",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description:
      "Clear career paths with internal promotion opportunities and leadership training",
    color: "green",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description:
      "Work with international clients and expand your global trade expertise",
    color: "yellow",
  },
  {
    icon: Award,
    title: "Recognition Program",
    description:
      "Regular appreciation, employee awards, and performance recognition",
    color: "red",
  },
];

const openPositions = [
  {
    title: "Import/Export Operations Manager",
    department: "Operations",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Lead our import/export operations, manage logistics coordination, and ensure compliance with international trade regulations.",
    requirements: [
      "5+ years in import/export operations",
      "Strong knowledge of customs procedures",
      "Experience with international shipping",
      "Excellent communication skills",
    ],
  },
  {
    title: "Business Development Executive",
    department: "Sales",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Drive business growth by identifying new clients, building relationships, and expanding our global trade network.",
    requirements: [
      "3+ years in B2B sales",
      "Experience in international trade",
      "Strong negotiation skills",
      "Excellent English communication",
    ],
  },
  {
    title: "Compliance Officer",
    department: "Legal & Compliance",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Ensure all import/export activities comply with international regulations, manage documentation, and maintain quality standards.",
    requirements: [
      "Bachelor's degree in Law/Business",
      "Knowledge of trade compliance",
      "Attention to detail",
      "Strong analytical skills",
    ],
  },
  {
    title: "Logistics Coordinator",
    department: "Operations",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Coordinate shipping operations, manage freight forwarding, and ensure timely delivery of international shipments.",
    requirements: [
      "2+ years in logistics",
      "Knowledge of shipping procedures",
      "Strong organizational skills",
      "Problem-solving abilities",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-time",
    description:
      "Develop and execute digital marketing strategies to enhance our online presence and attract international clients.",
    requirements: [
      "3+ years in digital marketing",
      "SEO/SEM expertise",
      "Social media management",
      "Analytics proficiency",
    ],
  },
  {
    title: "Customer Service Representative",
    department: "Customer Support",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Provide exceptional support to clients, handle inquiries, and ensure customer satisfaction throughout the trade process.",
    requirements: [
      "1+ years in customer service",
      "Excellent communication skills",
      "Problem-solving mindset",
      "Multilingual abilities (bonus)",
    ],
  },
];

const coreValues = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, exceeding expectations and delivering quality",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaboration and mutual support drive our success as we work together towards common goals",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We embrace change, encourage creativity, and continuously seek better ways to serve our clients",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Honesty, transparency, and ethical practices are the foundation of all our business relationships",
  },
];

const getColorClasses = (color: string) => {
  const colors: {
    [key: string]: { bg: string; border: string; highlight: string };
  } = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      highlight: "bg-blue-100",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      highlight: "bg-green-100",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      highlight: "bg-yellow-100",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      highlight: "bg-red-100",
    },
  };
  return colors[color] || colors.blue;
};

export default function CareersPage() {
  return (
    <ContentLayout
      pageTitle="Join Our Team"
      pageDescription="Build Your Career in Global Trade Excellence"
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
    >
      {/* Why Join Us Section */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Why Join Zexfro?"
          subtitle="Be part of a growing international trade company that values innovation, integrity, and excellence"
          centered
        />

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <strong>Zexfro International Limited</strong>, we believe our
            people are our greatest asset. We're looking for passionate
            individuals who want to make an impact in the world of global trade.
            Join us and be part of a team that's transforming international
            commerce.
          </p>
          <div className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] rounded-lg p-6 text-white">
            <p className="text-xl font-semibold">
              🎉 Since 2018, we've grown from a proprietorship to a thriving
              limited company with ambitious global expansion plans!
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-none p-6 text-center group hover:border-[#0a4a9e] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0a4a9e] transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#0a4a9e] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ContentSection>

      {/* Benefits Section */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Benefits & Perks"
          subtitle="We invest in our team members' success and well-being"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClasses = getColorClasses(benefit.color);

            return (
              <div
                key={index}
                className={`${colorClasses.bg} border ${colorClasses.border} rounded-none p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0a4a9e]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* Open Positions Section */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Open Positions"
          subtitle="Explore exciting career opportunities at Zexfro"
          centered
        />

        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#0a4a9e] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {position.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-[#0a4a9e] hover:bg-blue-100"
                    >
                      {position.type}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {position.description}
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0a4a9e]" />
                      Key Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="text-gray-600 text-sm flex items-start gap-2"
                        >
                          <span className="text-[#0a4a9e] mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-1 flex items-stretch">
                  {/*
                  <button className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  */}
                  <div className="w-full h-full bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white font-semibold px-5 py-4 rounded-lg shadow-md text-left flex flex-col justify-center">
                    <div className="mb-3">
                      Apply at{" "}
                      <a
                        href={`mailto:info@zexfrointl.com?subject=Application%20for%20${encodeURIComponent(position.title)}`}
                        className="bg-pink-500 hover:bg-pink-600 mt-3 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
                      >
                        info@zexfrointl.com
                      </a>
                    </div>
                    <div className="text-sm font-normal mt-3">
                      Subject: <b>Application for {position.title}</b>
                    </div>
                    <div className="text-sm mt-3 font-normal">
                      Attach your cover letter and resume (PDF)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Position Found */}
        <div className="mt-12 bg-blue-50 border-l-4 border-[#0a4a9e] p-8 rounded-r-lg text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-3">
            Don't see a perfect fit?
          </h4>
          <p className="text-gray-700 mb-6">
            We're always looking for talented individuals to join our team. Send
            us your resume and we'll keep you in mind for future opportunities.
          </p>
          {/* <button className="inline-flex items-center gap-2 bg-[#0a4a9e] hover:bg-[#05306b] text-white font-bold px-8 py-3 rounded-full transition-all duration-300">
            Send Your Resume
            <ArrowRight className="w-5 h-5" />
          </button> */}
        </div>
      </ContentSection>

      {/* Hiring Process Section */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Our Hiring Process"
          subtitle="A transparent and efficient recruitment journey"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#0a4a9e] via-[#05306b] to-[#041f3f]" />

          {/* Step 1 */}
          <div className="relative text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#041f3f] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 relative z-10">
              1
            </div>
            <div className="bg-white rounded-none border border-gray-200 p-6 hover:border-[#0a4a9e] hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Application
              </h4>
              <p className="text-sm text-gray-600">
                Submit your application with resume and cover letter
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#041f3f] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 relative z-10">
              2
            </div>
            <div className="bg-white rounded-none border border-gray-200 p-6 hover:border-[#0a4a9e] hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Screening
              </h4>
              <p className="text-sm text-gray-600">
                Initial review and phone screening with HR team
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#041f3f] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 relative z-10">
              3
            </div>
            <div className="bg-white rounded-none border border-gray-200 p-6 hover:border-[#0a4a9e] hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Interview
              </h4>
              <p className="text-sm text-gray-600">
                In-depth interviews with hiring managers and team members
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#041f3f] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 relative z-10">
              4
            </div>
            <div className="bg-white rounded-none border border-gray-200 p-6 hover:border-[#0a4a9e] hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Offer</h4>
              <p className="text-sm text-gray-600">
                Job offer extended and onboarding process begins
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our typical hiring process takes <strong>2-4 weeks</strong> from
            application to offer. We keep candidates informed at every stage and
            ensure a smooth experience.
          </p>
        </div>
      </ContentSection>

      {/* Team Culture Section */}
      <ContentSection bgColor="white">
        <SectionHeader
          title="Life at Zexfro"
          subtitle="Experience our vibrant work culture and collaborative environment"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
              alt="Team collaboration"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white font-bold text-lg p-4">
                Collaborative Workspace
              </p>
            </div>
          </div>

          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
              alt="Team meetings"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white font-bold text-lg p-4">
                Innovation & Growth
              </p>
            </div>
          </div>

          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
              alt="Team celebration"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white font-bold text-lg p-4">
                Celebrations & Events
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto">
            Join Zexfro International Limited and be part of a team that's
            shaping the future of global trade
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center gap-3 bg-white text-[#0a4a9e] hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View All Positions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="group inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a4a9e] font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Contact HR Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </ContentLayout>
  );
}
