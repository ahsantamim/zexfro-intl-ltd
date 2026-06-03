"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWeixin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export function Footer() {
  const t = useTranslations("footer");
  const [wechatModalOpen, setWechatModalOpen] = useState(false);

  const footerLinks = {
    company: [
      { href: "/payment-methods", label: t("companyPaymentMethods") },
      { href: "/case-study", label: "Case Studies" },
      { href: "/careers", label: t("companyCareers") },
      { href: "/contact", label: t("companyPartner") },
      { href: "/contact", label: t("companyQuote") },
      { href: "/about", label: t("companyMission") },
      { href: "/vision-mission-values", label: t("companyVision") },
    ],
    resources: [
      { href: "/blog", label: t("resourcesBlog") },
      { href: "/faq", label: t("resourcesFaq") },
      { href: "/contact", label: t("resourcesContact") },
      { href: "/logistic-supply-chain", label: t("resourcesLogistics") },
      { href: "/privacy-policy", label: t("resourcesPrivacy") },
      { href: "/terms-conditions", label: t("resourcesTerms") },
      { href: "/hs-code", label: t("resourcesHsCode") },
    ],
    services: [
      { href: "/competitive-advantages", label: t("servicesAdvantages") },
      { href: "/logistics-support", label: t("servicesLogisticsSupport") },
      { href: "/quality-assurance", label: t("servicesQualityAssurance") },
      {
        href: "/compliance-standards",
        label: t("servicesComplianceStandards"),
      },
      {
        href: "/documentation-compliance",
        label: t("servicesDocumentationCompliance"),
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* World Map Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url('/footer/world-map.webp')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          filter: "brightness(1.8) contrast(0.7)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Subtle Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80" />

      <div className="container mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto items-start">
          {/* Info Column */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <div className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 justify-center">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>9/B, Uttara -8, Dhaka -1230, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>Phone: +88 01911657332</span>
                </div>

                <div className="flex items-center gap-2 justify-center">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>Email: info@zexfrointl.com</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center mt-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61590514021032&rdid=qtORKShqp30eZfW7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18hcFtAm8P%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 p-2 rounded-full hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" fill="white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/zexfro-international-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#0A66C2] p-2 rounded hover:opacity-80 "
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" fill="white" />
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setWechatModalOpen(true);
                  }}
                  className="text-white bg-[#09B83E] p-1 rounded hover:opacity-80 transition-opacity"
                  aria-label="WeChat"
                >
                  <FontAwesomeIcon icon={faWeixin} className="text-xl mt-1" />
                </a>
                <a
                  href="https://t.me/zexfro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#229ED9] p-1 rounded-full hover:opacity-80 transition-opacity"
                  aria-label="Telegram"
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="text-xl mt-1 text-white"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">
              {t("companyTitle")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">
              {t("resourcesTitle")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">
              {t("servicesTitle")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col items-center gap-4">
            {/* Logo */}
            <Image
              src="/zexfro_logo_new.png"
              alt="Zexfro Logo"
              width={80}
              height={80}
              className="object-contain opacity-50"
            />
            {/* Copyright Text */}
            <p className="text-sm text-gray-400">
              © 2026 Zexfro. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* WeChat QR Modal */}
      {wechatModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setWechatModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-lg text-black font-semibold mb-4 text-center">
              WeChat QR
            </h2>
            <img
              src="/social/we%20chat.jpeg"
              alt="WeChat QR Code"
              className="w-96 h-96 object-contain mx-auto rounded border"
            />
            <p className="text-center text-gray-700 mt-2 text-sm">
              Scan to connect on WeChat
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
