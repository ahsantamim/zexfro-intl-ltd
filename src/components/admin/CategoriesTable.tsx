"use client";

import { useEffect, useState } from "react";
import {
  Edit,
  Trash2,
  Eye,
  FolderTree,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableSkeleton } from "./loading";
import { DeleteConfirmDialog } from "@/components/admin/DeleteConfirmDialog";
import { useDeleteConfirm } from "@/hooks/useDeleteConfirm";
import { useRouter } from "next/navigation";
import type { Category } from "@/lib/supabase/categories.service";

interface CategoriesTableProps {
  loading?: boolean;
}

export function CategoriesTable({
  loading: initialLoading = false,
}: CategoriesTableProps) {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryImages, setCategoryImages] = useState<Record<string, string>>(
    {}
  );
  const [loading, setLoading] = useState(initialLoading);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const deleteConfirm = useDeleteConfirm();

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });

        if (search) params.append("search", search);
        if (statusFilter !== "all") params.append("status", statusFilter);

        const response = await fetch(`/api/admin/categories?${params}`);
        const data = await response.json();

        if (data.success) {
          setCategories(data.data);
          setTotal(data.pagination.total);
          setTotalPages(data.pagination.totalPages);

          // Fetch images for all categories
          const imagePromises = data.data.map(async (cat: Category) => {
            try {
              const imgRes = await fetch(
                `/api/admin/categories/images?category_id=${cat.id}`
              );
              const imgData = await imgRes.json();
              return { id: cat.id, url: imgData.data?.image_url || null };
            } catch {
              return { id: cat.id, url: null };
            }
          });

          const images = await Promise.all(imagePromises);
          const imageMap: Record<string, string> = {};
          images.forEach((img) => {
            if (img.url) imageMap[img.id] = img.url;
          });
          setCategoryImages(imageMap);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, [page, limit, search, statusFilter]);

  const performDelete = async (id: string) => {
    const response = await fetch(`/api/admin/categories/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (data.success) {
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } else {
      alert("Failed to delete category: " + data.error);
      throw new Error(data.error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return <TableSkeleton rows={5} columns={6} />;
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card className="p-4 border-none shadow-sm rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="true">Active</SelectItem>
              <SelectItem value="false">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={limit.toString()}
            onValueChange={(val) => setLimit(parseInt(val))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Show 10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Show 10</SelectItem>
              <SelectItem value="25">Show 25</SelectItem>
              <SelectItem value="50">Show 50</SelectItem>
              <SelectItem value="100">Show 100</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Table */}
      <Card className="border-none shadow-sm rounded-none overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-bold text-gray-900">Image</TableHead>
                <TableHead className="font-bold text-gray-900">
                  Category
                </TableHead>
                <TableHead className="font-bold text-gray-900">Slug</TableHead>
                <TableHead className="font-bold text-gray-900">Type</TableHead>
                <TableHead className="font-bold text-gray-900">
                  Products
                </TableHead>
                <TableHead className="font-bold text-gray-900">
                  Status
                </TableHead>
                <TableHead className="font-bold text-gray-900">
                  Created
                </TableHead>
                <TableHead className="text-right font-bold text-gray-900">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-32 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <FolderTree className="w-12 h-12 text-gray-300" />
                      <p className="text-gray-600">No categories found</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                categories.map((category) => (
                  <TableRow key={category.id} className="hover:bg-gray-50">
                    <TableCell>
                      {categoryImages[category.id] ? (
                        <div className="relative w-12 h-12 rounded overflow-hidden border">
                          <Image
                            src={categoryImages[category.id]}
                            alt={category.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center">
                          <FolderTree className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium text-gray-900">
                      <div>
                        <div className="font-semibold">{category.name}</div>
                        {category.description && (
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {category.description.replace(/<[^>]*>/g, "")}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm text-gray-600">
                      {category.slug}
                    </TableCell>
                    <TableCell>
                      {category.trade_type ? (
                        <Badge
                          variant="outline"
                          className="border-blue-500 text-blue-700"
                        >
                          {category.trade_type.name}
                        </Badge>
                      ) : (
                        <span className="text-sm text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="border-green-500 text-green-700"
                      >
                        {category._count?.products || 0} products
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          category.status
                            ? "bg-green-50 text-green-700 hover:bg-green-50"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                        }
                      >
                        {category.status ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {formatDate(category.created_at)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() =>
                            router.push(`/admin/categories/${category.id}`)
                          }
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() =>
                            router.push(`/admin/categories/${category.id}/edit`)
                          }
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-red-50 hover:text-red-600"
                          onClick={() =>
                            deleteConfirm.requestDelete({
                              id: category.id,
                              name: category.name,
                              onConfirm: performDelete,
                            })
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <Card className="p-4 border-none shadow-sm rounded-none">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {(page - 1) * limit + 1} to{" "}
              {Math.min(page * limit, total)} of {total} categories
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <div className="text-sm text-gray-600">
                Page {page} of {totalPages}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      <DeleteConfirmDialog
        open={deleteConfirm.open}
        onOpenChange={deleteConfirm.handleOpenChange}
        title="Delete category?"
        itemName={deleteConfirm.target?.name}
        description={
          deleteConfirm.target
            ? `This will permanently delete the category "${deleteConfirm.target.name}" and may affect linked products.`
            : undefined
        }
        onConfirm={deleteConfirm.handleConfirm}
        isLoading={deleteConfirm.isLoading}
      />
    </div>
  );
}
