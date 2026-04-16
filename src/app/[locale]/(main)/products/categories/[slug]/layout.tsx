import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  let title = "Product Category";
  let description =
    "Browse products in this category on Zexfro's global trade platform.";

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL || "https://www.zexfrointl.com";
    const res = await fetch(`${baseUrl}/api/categories/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        const category = data.data;
        title = `${category.name} - Product Category`;
        description =
          category.description ||
          `Browse ${category.name} products available for import and export through Zexfro International.`;
      }
    }
  } catch {
    // Fall back to generic metadata
  }

  return generatePageSEO({
    title,
    description,
    path: `/products/categories/${slug}`,
    locale,
    keywords: [
      "product category",
      "trade products",
      "import category",
      "export category",
      "product catalog",
    ],
  });
}

export default function CategorySlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
