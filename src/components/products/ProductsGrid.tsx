"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Package, Loader2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  images?: Array<{
    image_url: string;
    alt_text: string;
    is_primary: boolean;
  }>;
}

interface ProductsGridProps {
  activeTab?: "import" | "export";
  searchQuery?: string;
  selectedCategory?: string;
  categoryId?: string;
  categorySlug?: string;
}

export function ProductsGrid({
  activeTab,
  searchQuery = "",
  selectedCategory = "",
  categoryId,
  categorySlug,
}: ProductsGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // Build query parameters
        const params = new URLSearchParams();
        if (activeTab) {
          params.append("type", activeTab);
        }
        if (categoryId) {
          params.append("category_id", categoryId);
        }
        if (categorySlug && selectedCategory) {
          params.append("category_slug", selectedCategory);
        }
        if (searchQuery) {
          params.append("search", searchQuery);
        }
        params.append("status", "true");
        params.append("limit", "100");

        const response = await fetch(`/api/products?${params.toString()}`);
        const data = await response.json();

        if (data.success) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeTab, searchQuery, selectedCategory, categoryId, categorySlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-[#0a4a9e] mx-auto" />
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No products found
        </h3>
        <p className="text-gray-600">
          {searchQuery || selectedCategory
            ? "Try adjusting your filters or search terms"
            : "No products available at the moment"}
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in"
      key={`${activeTab}-${selectedCategory}-${searchQuery}-${categoryId}`}
    >
      {products.map((product, index) => {
        const primaryImage = product.images?.find((img) => img.is_primary);
        const imageUrl =
          primaryImage?.image_url ||
          product.images?.[0]?.image_url ||
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80";

        return (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group relative overflow-hidden rounded-none aspect-[4/3] bg-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "backwards",
            }}
          >
            {/* Background Image */}
            <Image
              src={imageUrl}
              alt={primaryImage?.alt_text || product.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col p-6">
              <div className="flex-1" />
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                    {product.name}
                  </h3>
                  {product.category && (
                    <p className="text-sm text-gray-200 mb-2">
                      {product.category.name}
                    </p>
                  )}
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {product.short_description}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white font-semibold text-sm hover:text-blue-300 transition-colors">
                    Learn More
                  </span>
                  <ArrowButton />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
