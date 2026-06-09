"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Trash2, Loader2, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SanitizedHtml } from "@/components/ui/SanitizedHtml";
import { DeleteConfirmDialog } from "@/components/admin/DeleteConfirmDialog";

interface Category {
  id: string;
  name: string;
  slug: string;
  type: string;
  description: string | null;
  status: boolean;
  created_at: string;
  updated_at: string;
  trade_type?: {
    id: string;
    name: string;
  };
  _count?: {
    products: number;
  };
}

export default function ViewCategoryPage() {
  const router = useRouter();
  const params = useParams();
  const categoryId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [category, setCategory] = useState<Category | null>(null);
  const [coverImage, setCoverImage] = useState<string>("");

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await fetch(`/api/admin/categories/${categoryId}`);
        const data = await response.json();

        if (data.success) {
          setCategory(data.data);

          // Fetch category image
          const imageResponse = await fetch(
            `/api/admin/categories/images?category_id=${categoryId}`
          );
          const imageData = await imageResponse.json();
          if (imageData.success && imageData.data) {
            setCoverImage(imageData.data.image_url);
          }
        }
      } catch (error) {
        console.error("Failed to fetch category:", error);
      } finally {
        setLoading(false);
      }
    }

    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const response = await fetch(`/api/admin/categories/${categoryId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        alert("Category deleted successfully");
        router.push("/admin/categories");
      } else {
        alert("Failed to delete category: " + data.error);
      }
    } catch (error) {
      console.error("Failed to delete category:", error);
      alert("Failed to delete category");
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

  if (!category) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/categories">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
        <Card className="p-6">
          <p className="text-center text-gray-600">Category not found</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/categories">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {category.name}
            </h1>
            <p className="text-gray-600 mt-2">Category Details</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/admin/categories/${categoryId}/edit`}>
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
            title="Delete category?"
            itemName={category.name}
            description={`This will permanently delete "${category.name}" and may affect linked products.`}
            onConfirm={handleDelete}
            isLoading={deleting}
          />
        </div>
      </div>

      {/* Cover Image */}
      {coverImage && (
        <Card className="overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src={coverImage}
              alt={category.name}
              fill
              className="object-cover"
            />
          </div>
        </Card>
      )}

      {/* Details */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Basic Information
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="text-base font-medium text-gray-900">
                {category.name}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Slug</p>
              <p className="text-base font-mono text-gray-900">
                {category.slug}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <Badge
                variant="secondary"
                className={
                  category.status
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }
              >
                {category.status ? "Active" : "Inactive"}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-gray-600">Trade Type</p>
              {category.trade_type ? (
                <Badge
                  variant="outline"
                  className="border-blue-500 text-blue-700"
                >
                  {category.trade_type.name}
                </Badge>
              ) : (
                <p className="text-sm text-gray-400">Not assigned</p>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Statistics
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <div className="flex items-center gap-2 mt-1">
                <Package className="w-5 h-5 text-blue-600" />
                <p className="text-2xl font-bold text-gray-900">
                  {category._count?.products || 0}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Created At</p>
              <p className="text-base text-gray-900">
                {formatDate(category.created_at)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Last Updated</p>
              <p className="text-base text-gray-900">
                {formatDate(category.updated_at)}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Description */}
      {category.description && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Description
          </h2>
          <SanitizedHtml
            html={category.description}
            className="blog-content prose max-w-none text-gray-700"
          />
        </Card>
      )}
    </div>
  );
}
