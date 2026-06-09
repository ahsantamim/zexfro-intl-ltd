import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { BlogPost as BlogPostType } from "@/lib/api/blog";
import { SanitizedHtml } from "@/components/ui/SanitizedHtml";
import { BlogMediaFrame } from "./BlogMediaFrame";
import "@/styles/blog-post.css";

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const publishedDate = new Date(
    post.publishedAt || post.createdAt
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="blog-post-page min-h-screen bg-white">
      {/* Top bar */}
      <div className="border-b border-gray-100 bg-[var(--blog-surface)]/80">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a4a9e] hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article header */}
      <header className="container mx-auto max-w-4xl px-4 sm:px-6 pt-10 pb-8">
        <span className="inline-flex items-center rounded-full bg-[#0a4a9e]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0a4a9e]">
          {post.category}
        </span>

        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-[1.15] tracking-tight">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0a4a9e] text-base font-semibold text-white shadow-sm">
              {post.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="flex items-center gap-1.5 font-semibold text-gray-900">
                <User className="h-3.5 w-3.5 text-gray-400" />
                {post.author}
              </p>
              <p className="flex items-center gap-1.5 mt-0.5 text-gray-500">
                <Calendar className="h-3.5 w-3.5" />
                {publishedDate}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero image — any aspect ratio, fully visible */}
      {post.coverImage && (
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 pb-10">
          <BlogMediaFrame
            src={post.coverImage}
            alt={post.title}
            priority
          />
        </div>
      )}

      {/* Article content */}
      <div className="border-t border-gray-100 bg-[var(--blog-surface)]/40">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
          <SanitizedHtml
            html={post.content || ""}
            className="blog-article-body"
            formatImages
          />
        </div>
      </div>

      {/* End accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#0a4a9e]/20 to-transparent" />
    </article>
  );
}
