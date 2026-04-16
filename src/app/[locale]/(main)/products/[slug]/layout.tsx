import { generatePageSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  let title = "Product Details";
  let description =
    "View detailed product information including specifications, origin, and trade details on Zexfro's global trade platform.";
  let image: string | undefined;

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL || "https://www.zexfrointl.com";
    const res = await fetch(`${baseUrl}/api/products/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.data) {
        const product = data.data;
        title = product.name;
        description =
          product.short_description ||
          `${product.name} — available for import/export through Zexfro. Origin: ${product.origin_country || "Global"}.`;
        const primaryImage = product.product_images?.find(
          (img: { is_primary: boolean }) => img.is_primary,
        );
        image = primaryImage?.image_url || product.product_images?.[0]?.image_url;
      }
    }
  } catch {
    // Fall back to generic metadata
  }

  return generatePageSEO({
    title,
    description,
    path: `/products/${slug}`,
    locale,
    image,
    keywords: [
      "trade product",
      "import product",
      "export product",
      "product specifications",
      "international trade goods",
    ],
  });
}

export default function ProductSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
