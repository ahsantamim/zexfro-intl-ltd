"use client";

import { BlogPostsTable } from "@/components/admin/BlogPostsTable";
import { PageActions } from "@/components/admin/PageActions";

export default function AdminBlogPage() {
  return (
    <div className="space-y-6">
      <PageActions
        title="Blog Management"
        description="Manage your blog posts"
        createButtonText="Create New Post"
        createLink="/admin/blog/create"
      />
      <BlogPostsTable />
    </div>
  );
}
