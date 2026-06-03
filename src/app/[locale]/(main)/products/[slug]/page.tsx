"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { ChevronLeft, Share2, Heart } from "lucide-react";

interface ProductImage {
  id: string;
  image_url: string;
  alt_text: string;
  is_primary: boolean;
}

interface ProductSpecification {
  id: string;
  spec_key: string;
  spec_value: string;
}

interface TradeType {
  id: string;
  name: string;
  slug: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  long_description: string;
  hs_code: string;
  brand: string;
  origin_country: string;
  category: Category;
  product_images: ProductImage[];
  product_specifications: ProductSpecification[];
  trade_types: TradeType[];
}

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        console.log("Fetching product with slug:", slug);
        const response = await fetch(`/api/products/${slug}`);
        console.log("Response status:", response.status);

        if (!response.ok) {
          const errorData = await response.json();
          console.error("API Error:", errorData);
          throw new Error(errorData.error || "Failed to fetch product");
        }

        const data = await response.json();
        console.log("Product data:", data);
        console.log("Product images:", data.data?.product_images);
        if (data.success) {
          setProduct(data.data);
          // Set initial selected image to primary or first image
          const primaryImage =
            data.data.product_images?.find(
              (img: ProductImage) => img.is_primary,
            ) || data.data.product_images?.[0];
          console.log("Selected image:", primaryImage);
          setSelectedImage(primaryImage || null);
        } else {
          throw new Error(data.error || "Failed to load product");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          {error || "The product you are looking for does not exist."}
        </p>
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  const sanitizedHtml = DOMPurify.sanitize(product.long_description || "");

  return (
    <main className="min-h-screen bg-white pt-16 md:pt-20 overflow-x-hidden">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              href="/products"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Products
            </Link>
            <span className="text-gray-400">/</span>
            {product.category && (
              <>
                <Link
                  href={`/products/categories/${product.category.slug}`}
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  {product.category.name}
                </Link>
                <span className="text-gray-400">/</span>
              </>
            )}
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Image Gallery Section */}
          <div className="flex flex-col space-y-4">
            {/* Main Image */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
              {selectedImage ? (
                <Image
                  src={selectedImage.image_url}
                  alt={selectedImage.alt_text || product.name}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.product_images && product.product_images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.product_images.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage?.id === image.id
                        ? "border-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image.image_url}
                      alt={image.alt_text || product.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information Section */}
          <div className="flex flex-col">
            {/* Product Header */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {product.short_description}
              </p>
            </div>

            {/* Product Metadata */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 mb-6 md:mb-8 border border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {product.brand && (
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                      Brand
                    </p>
                    <p className="text-gray-900 font-medium text-base">
                      {product.brand}
                    </p>
                  </div>
                )}
                {product.hs_code && (
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                      HS Code
                    </p>
                    <p className="text-gray-900 font-medium text-base">
                      {product.hs_code}
                    </p>
                  </div>
                )}
                {product.origin_country && (
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                      Origin
                    </p>
                    <p className="text-gray-900 font-medium text-base">
                      {product.origin_country}
                    </p>
                  </div>
                )}
                {product.category && (
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                      Category
                    </p>
                    <Link
                      href={`/products/categories/${product.category.slug}`}
                      className="text-blue-600 font-medium text-base hover:underline inline-block"
                    >
                      {product.category.name}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Trade Types Tags */}
            {product.trade_types && product.trade_types.length > 0 && (
              <div className="mb-6 md:mb-8">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">
                  Trade Type
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.trade_types.map((type) => (
                    <span
                      key={type.id}
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        type.slug === "import"
                          ? "bg-blue-100 text-blue-700 border border-blue-200"
                          : type.slug === "export"
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {type.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
              <Link
                href="/contact"
                className="flex-1 bg-[#1800ad] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-[#1200a0] transition-all shadow-md hover:shadow-lg flex items-center justify-center text-center"
              >
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="flex-1 bg-white border-2 border-[#1800ad] text-[#1800ad] px-6 py-3.5 rounded-lg font-semibold hover:bg-[#1800ad] hover:text-white transition-all flex items-center justify-center text-center"
              >
                Contact Seller
              </Link>
              <button
                onClick={() => setLiked(!liked)}
                className="sm:flex-none bg-white border-2 border-gray-300 text-gray-700 p-3.5 rounded-lg hover:border-red-500 hover:text-red-500 transition-all"
              >
                <Heart size={20} fill={liked ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Share Button */}
            <button className="text-[#1800ad] hover:text-[#1200a0] font-semibold flex items-center gap-2 self-start">
              <Share2 size={18} />
              Share Product
            </button>
          </div>
        </div>

        {/* Description Section */}
        {product.long_description && (
          <div className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Product Description
            </h2>
            <div
              className="blog-content prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed overflow-x-auto break-words"
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                hyphens: "auto",
              }}
            />
            <style jsx>{`
              div :global(img) {
                max-width: 100% !important;
                height: auto !important;
              }
              div :global(table) {
                width: 100% !important;
                table-layout: fixed !important;
                word-wrap: break-word !important;
              }
              div :global(pre) {
                overflow-x: auto !important;
                white-space: pre-wrap !important;
                word-wrap: break-word !important;
              }
              div :global(*) {
                max-width: 100% !important;
              }
            `}</style>
          </div>
        )}

        {/* Specifications Section */}
        {product.product_specifications &&
          product.product_specifications.length > 0 && (
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {product.product_specifications.map((spec) => (
                  <div
                    key={spec.id}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">
                      {spec.spec_key}
                    </p>
                    <p className="text-gray-900 font-medium text-base">
                      {spec.spec_value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Related Products Section */}
        <div className="border-t border-gray-200 pt-12 md:pt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Related Products
          </h2>
          <p className="text-gray-600">
            Explore similar products in this category...
          </p>
        </div>
      </div>
    </main>
  );
}
