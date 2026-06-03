"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Loader2,
  Package,
  Tag,
  Globe,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DeleteConfirmDialog } from "@/components/admin/DeleteConfirmDialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  long_description: string;
  type: string | null;
  hs_code: string | null;
  brand: string | null;
  origin_country: string | null;
  status: boolean;
  created_at: string;
  updated_at: string;
  category?: {
    id: string;
    name: string;
  };
  product_images?: Array<{
    image_url: string;
    alt_text: string;
    is_primary: boolean;
  }>;
  product_trade_types?: Array<{
    trade_type: {
      id: string;
      name: string;
    };
  }>;
}

export default function ViewProductPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/admin/products/${productId}`);
        const data = await response.json();

        if (data.success) {
          setProduct(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const response = await fetch(`/api/admin/products/${productId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        alert("Product deleted successfully");
        router.push("/admin/products");
      } else {
        alert("Failed to delete product: " + data.error);
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Failed to delete product");
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/products">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
        <Card className="p-6">
          <p className="text-center text-gray-600">Product not found</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/products">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-2">Product Details</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/admin/products/${productId}/edit`}>
            <Button variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </Link>
          <Button
            variant="destructive"
            disabled={deleting}
            onClick={() => setDeleteDialogOpen(true)}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
          <DeleteConfirmDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
            title="Delete product?"
            itemName={product.name}
            description={`This will permanently delete "${product.name}" and remove all images and product data.`}
            onConfirm={handleDelete}
            isLoading={deleting}
          />
        </div>
      </div>

      {/* Product Images Carousel */}
      {product.product_images && product.product_images.length > 0 && (
        <Card className="overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {product.product_images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-96">
                    <Image
                      src={image.image_url}
                      alt={image.alt_text || product.name}
                      fill
                      className="object-contain"
                    />
                    {image.is_primary && (
                      <Badge className="absolute top-4 left-4 bg-blue-600">
                        Primary Image
                      </Badge>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {product.product_images.length > 1 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </Card>
      )}

      {/* Main Info Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Basic Information */}
        <Card className="p-6 md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Basic Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Product Name</p>
              <p className="text-base font-medium text-gray-900">
                {product.name}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Slug</p>
              <p className="text-base font-mono text-gray-900">
                {product.slug}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Category</p>
              {product.category ? (
                <Badge
                  variant="outline"
                  className="border-blue-500 text-blue-700"
                >
                  <Package className="w-3 h-3 mr-1" />
                  {product.category.name}
                </Badge>
              ) : (
                <p className="text-sm text-gray-400">Not assigned</p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <Badge
                variant="secondary"
                className={
                  product.status
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }
              >
                {product.status ? "Active" : "Inactive"}
              </Badge>
            </div>
            {product.type && (
              <div>
                <p className="text-sm text-gray-600">Type</p>
                <p className="text-base text-gray-900">{product.type}</p>
              </div>
            )}
            {product.brand && (
              <div>
                <p className="text-sm text-gray-600">Brand</p>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-500" />
                  <p className="text-base text-gray-900">{product.brand}</p>
                </div>
              </div>
            )}
            {product.origin_country && (
              <div>
                <p className="text-sm text-gray-600">Origin Country</p>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <p className="text-base text-gray-900">
                    {product.origin_country}
                  </p>
                </div>
              </div>
            )}
            {product.hs_code && (
              <div>
                <p className="text-sm text-gray-600">HS Code</p>
                <p className="text-base font-mono text-gray-900">
                  {product.hs_code}
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Metadata */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Metadata</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Created At</p>
              <p className="text-sm text-gray-900">
                {formatDate(product.created_at)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Last Updated</p>
              <p className="text-sm text-gray-900">
                {formatDate(product.updated_at)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Images</p>
              <p className="text-2xl font-bold text-blue-600">
                {product.product_images?.length || 0}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Trade Types */}
      {product.product_trade_types &&
        product.product_trade_types.length > 0 && (
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Trade Types
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.product_trade_types.map(({ trade_type }) => (
                <Badge
                  key={trade_type.id}
                  variant="outline"
                  className="border-purple-500 text-purple-700"
                >
                  {trade_type.name}
                </Badge>
              ))}
            </div>
          </Card>
        )}

      {/* Short Description */}
      {product.short_description && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Short Description
          </h2>
          <p className="text-gray-700">{product.short_description}</p>
        </Card>
      )}

      {/* Long Description */}
      {product.long_description && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Detailed Description
          </h2>
          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: product.long_description }}
          />
        </Card>
      )}
    </div>
  );
}
