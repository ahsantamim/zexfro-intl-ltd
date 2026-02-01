"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AnnouncementBadge } from "@/components/ui/AnnouncementBadge";

type NavLink =
  | { href: string; key: string; isDropdown?: false }
  | {
      key: string;
      isDropdown: true;
      dropdownItems: Array<{ href: string; key: string }>;
    };

const navLinks: NavLink[] = [
  { href: "/", key: "home" },
  {
    key: "about",
    isDropdown: true,
    dropdownItems: [
      { href: "/about", key: "aboutUs" },
      { href: "/board-of-directors", key: "boardOfDirectors" },
      { href: "/vision-mission-values", key: "visionMissionValues" },
      { href: "/glossary", key: "glossary" },
      { href: "/benefits-for-supplier", key: "benefitsForSupplier" },
    ],
  },
  {
    key: "services",
    isDropdown: true,
    dropdownItems: [
      { href: "/services", key: "seamlessSolutions" },
      { href: "/local-service", key: "localService" },
      { href: "/global-service", key: "globalService" },
    ],
  },
  { href: "/products", key: "products" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [showStaticLogo, setShowStaticLogo] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show GIF animation for 3 seconds, then switch to static PNG
    const timer = setTimeout(() => {
      setShowStaticLogo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="fixed h-16 md:h-20 top-0 left-0 right-0 z-50 bg-[#1800ad] backdrop-blur-md shadow-lg border-b border-white/10"
      style={{ boxShadow: "0 8px 32px 0 rgba(5, 48, 107, 0.37)" }}
    >
      {/* World Map Blueprint Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/world%20map.png)",
          backgroundSize: "50%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          filter: "brightness(1.5) contrast(2.2)",
          mixBlendMode: "overlay",
        }}
      />
      <div className="container mx-auto max-w-7xl h-full relative z-10 px-4 sm:px-6 lg:px-8">
        {/* MOBILE/TABLET LAYOUT - Industry Standard */}
        <div className="md:hidden flex items-center justify-between h-full">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/zexfro_logo_new.png"
              alt="Zexfro Logo"
              width={68}
              height={68}
              className="object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            {/* Announcement Badge - Mobile */}
            <AnnouncementBadge
              text="Announcement"
              icon="sparkles"
              link="/announcementpdf.pdf"
              announcements={["Announcement !"]}
            />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT - Industry Standard */}
        <div className="hidden md:flex items-center justify-between h-full">
          {/* Desktop Logo with Animation */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[60px] h-[60px]">
              {/* GIF Animation */}
              <Image
                src="/zex.gif"
                alt="Zexfro Logo Animation"
                width={60}
                height={60}
                className={`object-contain absolute scale-190 transition-all duration-1000 ${
                  showStaticLogo
                    ? "opacity-0 scale-90"
                    : "opacity-100 scale-100"
                }`}
                priority
              />
              {/* Static PNG Logo */}
              <Image
                src="/zexfro_logo_new.png"
                alt="Zexfro Logo"
                width={120}
                height={120}
                className={`object-contain absolute scale-200 mt-2 transition-all duration-1000 ${
                  showStaticLogo
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="flex items-center space-x-1 lg:space-x-2">
            {/* Announcement Badge - Desktop */}
            <div className="mr-2">
              <AnnouncementBadge
                text="Announcement"
                icon="sparkles"
                link="/announcementpdf.pdf"
                announcements={["Announcement !"]}
              />
            </div>

            {navLinks.map((link) => {
              if (link.isDropdown) {
                // Dropdown logic
                const isAbout = link.key === "about";
                const isServices = link.key === "services";
                const dropdownOpen = isAbout
                  ? aboutDropdownOpen
                  : servicesDropdownOpen;
                const setDropdownOpen = isAbout
                  ? setAboutDropdownOpen
                  : setServicesDropdownOpen;
                const dropdownRef = isAbout
                  ? aboutDropdownRef
                  : servicesDropdownRef;

                return (
                  <div
                    key={link.key}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="px-4 lg:px-5 py-2 text-base lg:text-lg font-semibold text-white hover:bg-white/20 transition-colors duration-200 rounded-md flex items-center gap-1"
                    >
                      {t(link.key as any)}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-[#1800ad] shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors"
                          >
                            {t(item.key as any)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Regular links
              if ("href" in link) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 lg:px-5 py-2 text-base lg:text-lg font-semibold text-white transition-colors duration-200 rounded-md ${
                      link.href === "/contact"
                        ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {t(link.key as any)}
                  </Link>
                );
              }
              return null;
            })}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#1800ad] border-t border-white/10 shadow-lg backdrop-blur-md max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container mx-auto max-w-7xl px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                // Dropdown for mobile
                const isAbout = link.key === "about";
                const isServices = link.key === "services";
                const mobileOpen = isAbout
                  ? mobileAboutOpen
                  : mobileServicesOpen;
                const setMobileOpen = isAbout
                  ? setMobileAboutOpen
                  : setMobileServicesOpen;

                return (
                  <div key={link.key}>
                    <button
                      onClick={() => setMobileOpen(!mobileOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-white hover:bg-white/20 transition-colors rounded-md"
                    >
                      {t(link.key as any)}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileOpen(false);
                            }}
                            className="block px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/20 transition-colors rounded-md"
                          >
                            {t(item.key as any)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Regular links for mobile
              if ("href" in link) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-semibold text-white transition-colors rounded-md ${
                      link.href === "/contact"
                        ? "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {t(link.key as any)}
                  </Link>
                );
              }
              return null;
            })}
            <div className="pt-2 border-t border-white/10">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
