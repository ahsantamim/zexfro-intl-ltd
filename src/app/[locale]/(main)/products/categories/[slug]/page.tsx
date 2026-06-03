"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { ArrowLeft, Package, Loader2 } from "lucide-react";
import Link from "next/link";

interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  type: string | null;
  status: boolean;
  image?: {
    image_url: string;
    alt_text: string | null;
  } | null;
  _count?: {
    products: number;
  };
}

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/categories/${slug}`);
        const data = await response.json();

        if (data.success) {
          setCategory(data.data);
        } else {
          setError(data.error || "Category not found");
        }
      } catch (err) {
        console.error("Error fetching category:", err);
        setError("Failed to load category");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCategory();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen pt-16 md:pt-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center py-20">
            <div className="text-center space-y-4">
              <Loader2 className="w-12 h-12 animate-spin text-[#0a4a9e] mx-auto" />
              <p className="text-gray-600">Loading category...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !category) {
    return (
      <main className="min-h-screen pt-16 md:pt-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center py-20">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Category Not Found
            </h2>
            <p className="text-gray-600 mb-8">{error}</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a4a9e] text-white rounded-lg hover:bg-[#05306b] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      {/* Back Button */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#0a4a9e] hover:text-[#05306b] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to All Products</span>
          </Link>
        </div>
      </section>

      {/* Category Cover Image */}
      {category.image && (
        <section className="relative h-[400px] bg-gray-900">
          <Image
            src={category.image.image_url}
            alt={category.image.alt_text || category.name}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {category.name}
              </h1>
              {category.type && (
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium uppercase tracking-wider">
                  {category.type === "import" ? "Import" : "Export"}
                </span>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Category Header (if no image) */}
      {!category.image && (
        <PageHeader
          title={category.name}
          description={
            category.description ||
            `Browse our ${category.name.toLowerCase()} products`
          }
        />
      )}

      {/* Category Description */}
      {category.description && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a4a9e] to-[#05306b] flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      About This Category
                    </h2>
                    {category._count && category._count.products > 0 && (
                      <p className="text-gray-600">
                        {category._count.products} product
                        {category._count.products !== 1 ? "s" : ""} available
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className="blog-content prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(category.description),
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products in This Category
            </h2>
            <p className="text-lg text-gray-600">
              Explore our range of {category.name.toLowerCase()} products
            </p>
          </div>
          <ProductsGrid categoryId={category.id} categorySlug={category.slug} />
        </div>
      </section>
    </main>
  );
}
