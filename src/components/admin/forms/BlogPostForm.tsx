"use client";

import { useState } from "react";
import { BlogPost } from "@/lib/hooks/useBlog";
import {
  useCreateBlogPost,
  useUpdateBlogPost,
} from "@/lib/hooks/useBlog";
import { RichTextEditor } from "./RichTextEditor";
import { CoverImageUploader } from "./CoverImageUploader";
import { AdminFormActions } from "./AdminFormActions";

interface BlogPostFormProps {
  post?: BlogPost;
}

export function BlogPostForm({ post }: BlogPostFormProps) {
  const createMutation = useCreateBlogPost();
  const updateMutation = useUpdateBlogPost();

  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(
    post?.coverImage || null
  );
  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    category: post?.category || "",
    author: post?.author || "",
    published: post?.published ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const stripped = formData.content.replace(/<[^>]*>/g, "").trim();
    if (!stripped) {
      alert("Content is required.");
      return;
    }

    try {
      const blogData = {
        ...formData,
        coverImage: coverImageUrl || undefined,
      };

      if (post) {
        await updateMutation.mutateAsync({ id: post.id, ...blogData });
      } else {
        await createMutation.mutateAsync(blogData);
      }
    } catch (error) {
      console.error("Error saving blog post:", error);
      alert("Failed to save blog post. Please try again.");
    }
  };

  const isSubmitting =
    createMutation.isPending || updateMutation.isPending;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({ ...formData, title });
    if (!post) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title *</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Slug *</label>
          <input
            type="text"
            required
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <p className="text-xs text-gray-500 mt-1">
            URL-friendly version of the title
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Category *</label>
          <input
            type="text"
            required
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="e.g., Technology, Business, Guides"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Author *</label>
          <input
            type="text"
            required
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <CoverImageUploader
        value={coverImageUrl}
        onChange={setCoverImageUrl}
        uploadBucket="blog"
        aspectRatio="landscape"
      />

      <div>
        <label className="block text-sm font-medium mb-2">Excerpt *</label>
        <textarea
          required
          rows={3}
          value={formData.excerpt}
          onChange={(e) =>
            setFormData({ ...formData, excerpt: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="A brief summary of the blog post..."
        />
      </div>

      <RichTextEditor
        label="Content"
        value={formData.content}
        onChange={(content) => setFormData({ ...formData, content })}
        placeholder="Write your blog post content here..."
        required
        height="400px"
        uploadBucket="blog"
      />

      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.published}
            onChange={(e) =>
              setFormData({ ...formData, published: e.target.checked })
            }
            className="w-4 h-4"
          />
          <span className="text-sm font-medium">Publish immediately</span>
        </label>
      </div>

      <AdminFormActions
        onCancel={() => window.history.back()}
        isSubmitting={isSubmitting}
        submitLabel={
          post
            ? "Update Post"
            : formData.published
              ? "Publish Post"
              : "Save Draft"
        }
        submittingLabel={
          post
            ? "Updating..."
            : formData.published
              ? "Publishing..."
              : "Saving draft..."
        }
      />
    </form>
  );
}
