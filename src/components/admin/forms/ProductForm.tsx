"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RichTextEditor } from "./RichTextEditor";
import { ImageUploader } from "./ImageUploader";
import { AdminFormActions } from "./AdminFormActions";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface TradeType {
  id: string;
  name: string;
  slug: string;
}

interface Product {
  id?: string;
  name: string;
  slug: string;
  category_id: string;
  type: string | null;
  short_description: string;
  long_description: string;
  hs_code: string | null;
  brand: string | null;
  origin_country: string | null;
  images?: Array<{
    image_url: string;
  }>;
  trade_types?: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}

interface ProductFormProps {
  product?: Product;
}

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tradeTypes, setTradeTypes] = useState<TradeType[]>([]);
  const [selectedTradeTypes, setSelectedTradeTypes] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    category_id: "",
    type: "",
    short_description: "",
    long_description: "",
    hs_code: "",
    brand: "",
    origin_country: "",
    images: [] as string[],
  });

  // Load existing product data
  useEffect(() => {
    if (product) {
      console.log("Loading product data:", product);
      console.log("Product category_id:", product.category_id);
      console.log("Product images:", product.images);
      console.log("Product trade types:", product.trade_types);

      setFormData({
        name: product.name,
        slug: product.slug,
        category_id: product.category_id,
        type: product.type || "",
        short_description: product.short_description,
        long_description: product.long_description,
        hs_code: product.hs_code || "",
        brand: product.brand || "",
        origin_country: product.origin_country || "",
        images: product.images?.map((img) => img.image_url) || [],
      });

      console.log("FormData set with category_id:", product.category_id);

      // Set selected trade types (or clear if none)
      const tradeTypeIds = product.trade_types?.map((tt) => tt.id) || [];
      console.log("Setting selectedTradeTypes to:", tradeTypeIds);
      setSelectedTradeTypes(tradeTypeIds);
    }
  }, [product]);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "/api/admin/categories?status=true&limit=100"
        );
        const data = await response.json();
        if (data.success) {
          setCategories(data.data);
          console.log("Categories loaded:", data.data.length, "items");
          console.log("Current formData.category_id:", formData.category_id);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  // Fetch trade types
  useEffect(() => {
    async function fetchTradeTypes() {
      try {
        const response = await fetch(
          "/api/admin/trade-types?status=true&limit=100"
        );
        const data = await response.json();
        if (data.success) {
          setTradeTypes(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch trade types:", error);
      }
    }
    fetchTradeTypes();
  }, []);

  // Auto-generate slug from name
  const handleNameChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      name,
      slug: name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, ""),
    }));
  };

  // Toggle trade type selection
  const toggleTradeType = (id: string) => {
    setSelectedTradeTypes((prev) => {
      const newSelection = prev.includes(id)
        ? prev.filter((ttId) => ttId !== id)
        : [...prev, id];
      console.log("Trade type toggled:", id);
      console.log("New selectedTradeTypes:", newSelection);
      return newSelection;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.images.length === 0) {
      alert("Please upload at least one product image.");
      return;
    }

    const strippedLong = formData.long_description
      .replace(/<[^>]*>/g, "")
      .trim();
    if (!strippedLong) {
      alert("Long description is required.");
      return;
    }

    setLoading(true);

    try {
      const isEditing = !!product?.id;
      const url = isEditing
        ? `/api/admin/products/${product.id}`
        : "/api/admin/products";
      const method = isEditing ? "PUT" : "POST";

      // Prepare images data for database
      const imagesData = formData.images.map((imageUrl, index) => ({
        image_url: imageUrl,
        alt_text: formData.name,
        is_primary: index === 0,
        sort_order: index,
      }));

      // Prepare specifications data (empty for now, can be added later)
      const specificationsData: Array<{
        spec_key: string;
        spec_value: string;
        unit: string | null;
      }> = [];

      console.log("Submitting product with:");
      console.log("- selectedTradeTypes:", selectedTradeTypes);
      console.log("- images:", imagesData.length, "items");
      console.log("- category_id:", formData.category_id);

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          trade_type_ids: selectedTradeTypes,
          images: imagesData,
          specifications: specificationsData,
          status: true,
          created_by: null,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          isEditing
            ? "Product updated successfully"
            : "Product created successfully"
        );
        router.push("/admin/products");
      } else {
        console.error("Server error:", data);
        alert(
          `Failed to ${isEditing ? "update" : "create"} product: ${
            data.error || "Unknown error"
          }`
        );
      }
    } catch (error) {
      console.error(
        `Failed to ${product?.id ? "update" : "create"} product:`,
        error
      );
      alert(
        `Failed to ${product?.id ? "update" : "create"} product: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-8 space-y-8"
    >
        {/* Section 1: Basic Information */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Product Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="Enter product name"
                required
                className="text-sm"
              />
            </div>

            {/* Slug */}
            <div className="space-y-2">
              <Label htmlFor="slug" className="text-sm font-medium">
                Slug <span className="text-red-500">*</span>
              </Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                placeholder="product-slug"
                required
                pattern="[a-z0-9-]+"
                title="Only lowercase letters, numbers, and hyphens"
                className="text-sm"
              />
              <p className="text-xs text-gray-500">Auto-generated from name</p>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category_id" className="text-sm font-medium">
                Category <span className="text-red-500">*</span>
              </Label>
              <Select
                key={formData.category_id || "no-category"}
                value={formData.category_id}
                onValueChange={(value) => {
                  console.log("Category changed to:", value);
                  setFormData({ ...formData, category_id: value });
                }}
                required
              >
                <SelectTrigger className="text-sm w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Product Type */}
            <div className="space-y-2">
              <Label htmlFor="type" className="text-sm font-medium">
                Product Type
              </Label>
              <Input
                id="type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                placeholder="e.g., Standard, Premium"
                className="text-sm"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Product Details - 2 Columns */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Product Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Brand */}
            <div className="space-y-2">
              <Label htmlFor="brand" className="text-sm font-medium">
                Brand
              </Label>
              <Input
                id="brand"
                value={formData.brand}
                onChange={(e) =>
                  setFormData({ ...formData, brand: e.target.value })
                }
                placeholder="Brand name"
                className="text-sm"
              />
            </div>

            {/* Origin Country */}
            <div className="space-y-2">
              <Label htmlFor="origin_country" className="text-sm font-medium">
                Origin Country
              </Label>
              <Input
                id="origin_country"
                value={formData.origin_country}
                onChange={(e) =>
                  setFormData({ ...formData, origin_country: e.target.value })
                }
                placeholder="e.g., China, USA"
                className="text-sm"
              />
            </div>

            {/* HS Code */}
            <div className="space-y-2">
              <Label htmlFor="hs_code" className="text-sm font-medium">
                HS Code
              </Label>
              <Input
                id="hs_code"
                value={formData.hs_code}
                onChange={(e) =>
                  setFormData({ ...formData, hs_code: e.target.value })
                }
                placeholder="e.g., 8471.30"
                className="text-sm"
              />
            </div>

            {/* Trade Types */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Trade Types</Label>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {tradeTypes.map((tt) => (
                  <label
                    key={tt.id}
                    className="flex items-center gap-2 px-2 py-2 border rounded cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTradeTypes.includes(tt.id)}
                      onChange={() => toggleTradeType(tt.id)}
                      className="w-3 h-3 rounded"
                    />
                    <span className="font-medium text-gray-700">{tt.name}</span>
                  </label>
                ))}
              </div>
              {tradeTypes.length === 0 && (
                <p className="text-xs text-gray-500 italic pt-1">
                  No trade types available
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 4: Product Images - Full Width */}
        <div className="space-y-6 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Product Images
          </h2>
          <ImageUploader
            label="Upload product images"
            value={formData.images}
            onChange={(images) => setFormData({ ...formData, images })}
            bucket="products"
            maxFiles={5}
            required
            aspectRatio="square"
          />
        </div>

        {/* Section 5: Descriptions - Full Width */}
        <div className="space-y-6 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-900">Descriptions</h2>

          {/* Short Description */}
          <div className="space-y-2">
            <Label htmlFor="short_description" className="text-sm font-medium">
              Short Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="short_description"
              value={formData.short_description}
              onChange={(e) =>
                setFormData({ ...formData, short_description: e.target.value })
              }
              placeholder="Brief product description (1-2 sentences)"
              rows={3}
              required
              className="resize-none text-sm"
            />
            <p className="text-xs text-gray-500">
              Maximum 200 characters recommended
            </p>
          </div>

          {/* Long Description */}
          <div className="space-y-2">
            <RichTextEditor
              label="Long Description"
              value={formData.long_description}
              onChange={(value) =>
                setFormData({ ...formData, long_description: value })
              }
              placeholder="Detailed product description with formatting, images, and lists"
              required
              height="400px"
              uploadBucket="products"
            />
            <p className="text-xs text-gray-500">
              Add detailed product features, specifications, and benefits
            </p>
          </div>
        </div>

        <AdminFormActions
          onCancel={() => router.back()}
          isSubmitting={loading}
          submitLabel={product?.id ? "Update Product" : "Create Product"}
          submittingLabel={product?.id ? "Updating..." : "Creating..."}
        />
    </form>
  );
}
