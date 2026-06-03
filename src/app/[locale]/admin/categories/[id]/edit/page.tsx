"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryForm, CategoryFormData } from "@/components/admin/forms/CategoryForm";
import { PageLoader } from "@/components/ui/LoadingSpinner";

export default function EditCategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  const [category, setCategory] = useState<CategoryFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await fetch(`/api/admin/categories/${categoryId}`);
        const data = await response.json();

        if (data.success) {
          const cat = data.data;
          let coverImage: string | null = null;

          const imageResponse = await fetch(
            `/api/admin/categories/images?category_id=${categoryId}`
          );
          const imageData = await imageResponse.json();
          if (imageData.success && imageData.data) {
            coverImage = imageData.data.image_url;
          }

          setCategory({
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
            type: cat.type || "",
            description: cat.description || "",
            status: cat.status,
            coverImage,
          });
        }
      } catch (error) {
        console.error("Failed to fetch category:", error);
      } finally {
        setLoading(false);
      }
    }

    if (categoryId) fetchCategory();
  }, [categoryId]);

  if (loading) {
    return <PageLoader />;
  }

  if (!category) {
    return (
      <div className="space-y-6">
        <p className="text-gray-600">Category not found.</p>
        <Link href="/admin/categories">
          <Button variant="outline">Back to categories</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/categories">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Category</h1>
          <p className="text-gray-600 mt-2">Update category information</p>
        </div>
      </div>
      <CategoryForm category={category} />
    </div>
  );
}
