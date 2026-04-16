import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

interface RouteConfig {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.zexfrointl.com";

  const routes: RouteConfig[] = [
    { path: "", changeFrequency: "daily", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/products", changeFrequency: "weekly", priority: 0.9 },
    { path: "/blog", changeFrequency: "daily", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/board-of-directors", changeFrequency: "monthly", priority: 0.6 },
    {
      path: "/vision-mission-values",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { path: "/careers", changeFrequency: "weekly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
    { path: "/glossary", changeFrequency: "monthly", priority: 0.6 },
    { path: "/case-study", changeFrequency: "monthly", priority: 0.7 },
    { path: "/advantages", changeFrequency: "monthly", priority: 0.7 },
    {
      path: "/competitive-advantages",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/benefits-for-supplier",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { path: "/global-service", changeFrequency: "monthly", priority: 0.8 },
    { path: "/local-service", changeFrequency: "monthly", priority: 0.8 },
    {
      path: "/logistic-supply-chain",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { path: "/logistics-support", changeFrequency: "monthly", priority: 0.7 },
    {
      path: "/resources/logistics-supply-chain",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { path: "/payment-methods", changeFrequency: "monthly", priority: 0.6 },
    {
      path: "/compliance-standards",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/documentation-compliance",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { path: "/quality-assurance", changeFrequency: "monthly", priority: 0.7 },
    { path: "/hs-code", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms-conditions", changeFrequency: "yearly", priority: 0.3 },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((loc) => [
              loc,
              `${baseUrl}/${loc}${route.path}`,
            ]),
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
