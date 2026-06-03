"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CoverImageUploader } from "./CoverImageUploader";
import { RichTextEditor } from "./RichTextEditor";
import { AdminFormActions } from "./AdminFormActions";

interface TradeType {
  id: string;
  name: string;
  slug: string;
}

export interface CategoryFormData {
  id?: string;
  name: string;
  slug: string;
  type: string;
  description: string;
  status: boolean;
  coverImage?: string | null;
}

interface CategoryFormProps {
  category?: CategoryFormData;
}

export function CategoryForm({ category }: CategoryFormProps) {
  const router = useRouter();
  const isEditing = !!category?.id;

  const [loading, setLoading] = useState(false);
  const [tradeTypes, setTradeTypes] = useState<TradeType[]>([]);
  const [coverImage, setCoverImage] = useState<string | null>(
    category?.coverImage ?? null
  );
  const [formData, setFormData] = useState({
    name: category?.name || "",
    slug: category?.slug || "",
    type: category?.type || "",
    description: category?.description || "",
    status: category?.status ?? true,
  });

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        slug: category.slug,
        type: category.type || "",
        description: category.description || "",
        status: category.status,
      });
      setCoverImage(category.coverImage ?? null);
    }
  }, [category]);

  useEffect(() => {
    async function fetchTradeTypes() {
      try {
        const response = await fetch(
          "/api/admin/trade-types?status=true&limit=100"
        );
        const data = await response.json();
        if (data.success) setTradeTypes(data.data);
      } catch (error) {
        console.error("Failed to fetch trade types:", error);
      }
    }
    fetchTradeTypes();
  }, []);

  const handleNameChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      name,
      slug: !isEditing
        ? name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
        : prev.slug,
    }));
  };

  const saveCategoryImage = async (categoryId: string, imageUrl: string) => {
    if (isEditing) {
      await fetch(
        `/api/admin/categories/images?category_id=${categoryId}`,
        { method: "DELETE" }
      );
    }
    await fetch("/api/admin/categories/images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category_id: categoryId,
        image_url: imageUrl,
        alt_text: formData.name,
      }),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEditing
        ? `/api/admin/categories/${category!.id}`
        : "/api/admin/categories";
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          slug: formData.slug,
          type: formData.type || null,
          description: formData.description || null,
          status: isEditing ? formData.status : true,
          parent_id: null,
          created_by: null,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        alert(
          `Failed to ${isEditing ? "update" : "create"} category: ${data.error}`
        );
        return;
      }

      const categoryId = isEditing ? category!.id! : data.data?.id;

      if (coverImage && categoryId) {
        try {
          await saveCategoryImage(categoryId, coverImage);
        } catch (err) {
          console.error("Failed to save category image:", err);
        }
      }

      router.push("/admin/categories");
    } catch (error) {
      console.error("Failed to save category:", error);
      alert(`Failed to ${isEditing ? "update" : "create"} category`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-8 space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Category Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="Electronics"
            required
            className="border-gray-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">
            Slug <span className="text-red-500">*</span>
          </Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) =>
              setFormData({ ...formData, slug: e.target.value })
            }
            placeholder="electronics"
            required
            pattern="[a-z0-9-]+"
            className="border-gray-300"
          />
          <p className="text-xs text-gray-500">
            URL-friendly name (auto-generated from category name)
          </p>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="type">
            Trade Type <span className="text-red-500">*</span>
          </Label>
          <Select
            key={formData.type || "no-type"}
            value={formData.type}
            onValueChange={(value) =>
              setFormData({ ...formData, type: value })
            }
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select trade type" />
            </SelectTrigger>
            <SelectContent>
              {tradeTypes.map((tt) => (
                <SelectItem key={tt.id} value={tt.id}>
                  {tt.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <CoverImageUploader
        label="Cover Image"
        value={coverImage}
        onChange={setCoverImage}
        uploadBucket="categories"
        aspectRatio="landscape"
      />

      <RichTextEditor
        label="Description"
        value={formData.description}
        onChange={(description) =>
          setFormData({ ...formData, description })
        }
        placeholder="Describe this category, products, and trade details..."
        height="320px"
        uploadBucket="categories"
      />

      {isEditing && (
        <div className="flex items-center gap-3">
          <Switch
            id="status"
            checked={formData.status}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, status: checked })
            }
          />
          <Label htmlFor="status" className="font-medium">
            Active (visible on storefront)
          </Label>
        </div>
      )}

      <AdminFormActions
        onCancel={() => router.back()}
        isSubmitting={loading}
        submitLabel={isEditing ? "Save Changes" : "Create Category"}
        submittingLabel={isEditing ? "Saving..." : "Creating..."}
      />
    </form>
  );
}
