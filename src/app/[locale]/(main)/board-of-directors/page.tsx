"use client";

import {
  ContentLayout,
  ContentSection,
  SectionHeader,
  CTABox,
} from "@/components/ui/ContentLayout";
import { Users, Mail, Linkedin, Award } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function BoardOfDirectorsPage() {
  const t = useTranslations("boardOfDirectors");

  const directors = [
    {
      name: "Khazi Sirajul Islam",
      position: "Acting Chairman",
      image: "/Directores/Khazi Sirajul Islam Acting Chairman.jpeg",
      bio: "Khazi Sirajul Islam provides strategic leadership and oversees board activities as Acting Chairman.",
    },
    {
      name: "Jesmin Akter",
      position: "Vice Chairman",
      image: "/Directores/Jesmin Akter Vice Chariman.jpeg",
      bio: "Jesmin Akter supports the board and company operations as Vice Chairman.",
    },
    {
      name: "Md. Shameem Ahmed",
      position: "Managing Director",
      image: "/Directores/Md. Shameem Ahmed Managing Director.jpeg",
      bio: "Md. Shameem Ahmed manages daily operations and drives company growth as Managing Director.",
    },
    {
      name: "Nashir Hussein",
      position: "General Manager",
      image: "/Directores/Nashir Hussein General Manager.jpeg",
      bio: "Nashir Hussein ensures smooth business operations as General Manager.",
    },
    {
      name: "Najmul Hasan",
      position: "Logistic Coordinator",
      image: "/Directores/Najmul Hasan Logistic Coordinator.jpeg",
      bio: "Najmul Hasan coordinates logistics and supply chain activities.",
    },
    {
      name: "Md. Morshed Kamal",
      position: "Local Distributor",
      image: "/Directores/Md. Morshed Kamal Local distributor.jpeg",
      bio: "Md. Morshed Kamal manages local distribution channels.",
    },
    {
      name: "Rofiq Bapary",
      position: "Warehouse & Inventory Manager",
      image: "/Directores/Rofiq Bapary Warehouse & Inventory Manager.jpeg",
      bio: "Rofiq Bapary oversees warehouse and inventory management.",
    },
    {
      name: "Arman Kosro",
      position: "Head of Sales Representatives",
      image: "/Directores/Arman Kosro Head of Sales Representatives.jpeg",
      bio: "Arman Kosro leads the sales team and drives revenue growth.",
    },
  ];

  return (
    <ContentLayout
      pageTitle={t("pageTitle")}
      pageDescription={t("pageDescription")}
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
    >
      {/* Introduction */}
      <ContentSection bgColor="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#0a4a9e] rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("introduction.title")}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("introduction.description")}
          </p>
        </div>
      </ContentSection>

      {/* Directors Grid */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title={t("directors.title")}
          subtitle={t("directors.subtitle")}
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {directors.map((director) => (
            <div
              key={director.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mx-auto w-full max-w-[250px]"
            >
              <div className="relative h-64">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-fit-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {director.name}
                  </h3>
                  <p className="text-sm text-white/90">{director.position}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {director.bio}
                </p>
                {/* <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={`mailto:${director.email}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0a4a9e] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="hidden lg:inline">
                      {t("directors.email")}
                    </span>
                  </a>
                  <a
                    href={director.linkedin}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0a4a9e] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="hidden lg:inline">
                      {t("directors.linkedin")}
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Governance */}
      <ContentSection bgColor="white">
        <SectionHeader
          title={t("governance.title")}
          subtitle={t("governance.subtitle")}
          icon={<Award className="w-7 h-7 text-white" />}
          centered
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("governance.boardResponsibilities.title")}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {t
                  .raw("governance.boardResponsibilities.items")
                  .map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("governance.meetingSchedule.title")}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {t
                  .raw("governance.meetingSchedule.items")
                  .map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-linear-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {t("governance.commitment.title")}
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              {t("governance.commitment.description")}
            </p>
          </div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection bgColor="gray">
        <CTABox
          title={t("cta.title")}
          description={t("cta.description")}
          buttonText={t("cta.button")}
          buttonLink="/contact"
        />
      </ContentSection>
    </ContentLayout>
  );
}
