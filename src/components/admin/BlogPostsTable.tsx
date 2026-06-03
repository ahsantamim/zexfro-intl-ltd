"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit, Trash2, Eye, FileText, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TableSkeleton } from "@/components/admin/loading";
import { DeleteConfirmDialog } from "@/components/admin/DeleteConfirmDialog";
import { useDeleteConfirm } from "@/hooks/useDeleteConfirm";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  published: boolean;
  createdAt: string;
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch("/api/blog?publishedOnly=false");
  if (!response.ok) throw new Error("Failed to fetch blog posts");
  const data = await response.json();
  return data.posts;
}

async function deleteBlogPost(id: string): Promise<void> {
  const response = await fetch(`/api/blog/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete blog post");
}

async function updateBlogPublished(
  id: string,
  published: boolean
): Promise<void> {
  const response = await fetch(`/api/blog/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ published }),
  });
  if (!response.ok) throw new Error("Failed to update publish status");
}

const COLUMN_COUNT = 6;

interface BlogPostsTableProps {
  /** Demo / storybook: force skeleton state */
  loading?: boolean;
}

export function BlogPostsTable({ loading: forceLoading = false }: BlogPostsTableProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [publishingId, setPublishingId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const deleteConfirm = useDeleteConfirm();

  const {
    data: posts,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
  });

  const publishMutation = useMutation({
    mutationFn: ({
      id,
      published,
    }: {
      id: string;
      published: boolean;
    }) => updateBlogPublished(id, published),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
    onSettled: () => setPublishingId(null),
  });

  const performDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
    } catch (err) {
      console.error("Error deleting post:", err);
      alert("An error occurred while deleting the blog post.");
      throw err;
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    setPublishingId(id);
    try {
      await publishMutation.mutateAsync({ id, published });
    } catch (err) {
      console.error("Error updating publish status:", err);
      alert("Failed to update publish status. Please try again.");
      setPublishingId(null);
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    router.push(`/admin/blog/${id}/edit`);
  };

  const handleView = (slug: string) => {
    window.open(`/blog/${slug}`, "_blank");
  };

  const isRowBusy = (postId: string) =>
    (deleteConfirm.isLoading && deleteConfirm.target?.id === postId) ||
    publishingId === postId ||
    editingId === postId;

  if (isLoading || forceLoading) {
    return <TableSkeleton rows={6} columns={COLUMN_COUNT} />;
  }

  if (error) {
    return (
      <Card className="border-none shadow-sm rounded-lg overflow-hidden">
        <div className="p-8 text-center text-red-600">
          <p className="font-medium">Failed to load blog posts.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() =>
              queryClient.invalidateQueries({ queryKey: ["blog-posts"] })
            }
          >
            Try again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <>
    <Card className="border-none shadow-sm rounded-lg overflow-hidden">
      {isFetching && !isLoading && (
        <div className="h-0.5 w-full bg-[#0a4a9e]/20 overflow-hidden">
          <div className="h-full w-1/3 bg-[#0a4a9e] animate-pulse" />
        </div>
      )}

      <div className="overflow-x-auto">
        <Table className="table-fixed w-full min-w-[720px]">
          <colgroup>
            <col style={{ width: "32%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "14%" }} />
          </colgroup>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50 border-b">
              <TableHead className="px-4 py-3 font-bold text-gray-900">
                Title
              </TableHead>
              <TableHead className="px-4 py-3 font-bold text-gray-900">
                Category
              </TableHead>
              <TableHead className="px-4 py-3 font-bold text-gray-900">
                Author
              </TableHead>
              <TableHead className="px-4 py-3 font-bold text-gray-900">
                Published
              </TableHead>
              <TableHead className="px-4 py-3 font-bold text-gray-900">
                Date
              </TableHead>
              <TableHead className="px-4 py-3 text-right font-bold text-gray-900">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!posts || posts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={COLUMN_COUNT} className="h-40 text-center">
                  <div className="flex flex-col items-center gap-3 py-4">
                    <FileText className="w-12 h-12 text-gray-300" />
                    <p className="text-gray-600 font-medium">
                      No blog posts yet
                    </p>
                    <Button
                      onClick={() => router.push("/admin/blog/create")}
                      className="mt-1"
                    >
                      Create First Post
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              posts.map((post) => {
                const busy = isRowBusy(post.id);
                const isDeleting =
                  deleteConfirm.isLoading &&
                  deleteConfirm.target?.id === post.id;
                const isPublishing = publishingId === post.id;
                const isEditing = editingId === post.id;

                return (
                  <TableRow
                    key={post.id}
                    className={cn(
                      "hover:bg-gray-50/80 transition-colors",
                      busy && "opacity-60 pointer-events-none"
                    )}
                  >
                    <TableCell className="px-4 py-3 align-middle max-w-0 whitespace-normal">
                      <p
                        className="font-medium text-gray-900 truncate"
                        title={post.title}
                      >
                        {post.title}
                      </p>
                      <p
                        className="text-xs text-gray-400 truncate mt-0.5"
                        title={post.slug}
                      >
                        /{post.slug}
                      </p>
                    </TableCell>

                    <TableCell className="px-4 py-3 align-middle max-w-0 whitespace-normal">
                      <Badge
                        variant="outline"
                        className="border-[#0a4a9e] text-[#0a4a9e] max-w-full truncate inline-block"
                        title={post.category}
                      >
                        {post.category}
                      </Badge>
                    </TableCell>

                    <TableCell className="px-4 py-3 align-middle max-w-0 whitespace-normal">
                      <span
                        className="text-gray-600 truncate block"
                        title={post.author}
                      >
                        {post.author}
                      </span>
                    </TableCell>

                    <TableCell className="px-4 py-3 align-middle whitespace-normal">
                      <div className="flex items-center gap-2 min-w-[7rem]">
                        {isPublishing ? (
                          <Loader2 className="w-4 h-4 shrink-0 animate-spin text-[#0a4a9e]" />
                        ) : (
                          <Switch
                            checked={post.published}
                            onCheckedChange={(checked) =>
                              handleTogglePublish(post.id, checked)
                            }
                            disabled={busy}
                            aria-label={
                              post.published
                                ? "Unpublish post"
                                : "Publish post"
                            }
                          />
                        )}
                        <span
                          className={cn(
                            "text-xs font-medium shrink-0",
                            post.published
                              ? "text-green-700"
                              : "text-gray-500"
                          )}
                        >
                          {post.published ? "Live" : "Draft"}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="px-4 py-3 align-middle text-gray-600 text-sm whitespace-nowrap">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </TableCell>

                    <TableCell className="px-4 py-3 align-middle text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-0.5">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() => handleView(post.slug)}
                          title="View on frontend"
                          disabled={!post.published || busy}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() => handleEdit(post.id)}
                          title="Edit post"
                          disabled={busy}
                        >
                          {isEditing ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Edit className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-red-50 hover:text-red-600"
                          onClick={() =>
                            deleteConfirm.requestDelete({
                              id: post.id,
                              name: post.title,
                              onConfirm: performDelete,
                            })
                          }
                          title="Delete post"
                          disabled={busy}
                        >
                          {isDeleting ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </Card>

      <DeleteConfirmDialog
        open={deleteConfirm.open}
        onOpenChange={deleteConfirm.handleOpenChange}
        title="Delete blog post?"
        itemName={deleteConfirm.target?.name}
        description={
          deleteConfirm.target
            ? `This will permanently delete "${deleteConfirm.target.name}" and remove it from the blog.`
            : undefined
        }
        onConfirm={deleteConfirm.handleConfirm}
        isLoading={deleteConfirm.isLoading}
      />
    </>
  );
}
