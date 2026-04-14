import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string | null;
  author: string;
  authorImage: string | null;
  category: string;
  publishedAt: Date | null;
  slug: string;
}

interface BlogSectionProps {
  posts: BlogPostData[];
}

const defaultImage =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop";

function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogSection({ posts }: BlogSectionProps) {
  const t = useTranslations("blog");

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white border border-gray-200 hover:border-[#0A4D96] transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.coverImage || defaultImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0A4D96] text-white text-xs font-semibold px-3 py-1 rounded-none">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col">
                {/* Date - always at top, fixed height 20px */}
                <div className="flex items-center gap-2 text-xs text-gray-500 h-[20px]">
                  <Calendar className="w-3 h-3 shrink-0" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>

                {/* Title - fixed height 48px, always starts at same position */}
                <h3 className="text-lg font-bold text-gray-900 h-[48px] mt-3 mb-0 line-clamp-2 group-hover:text-[#0A4D96] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt - fixed height 60px, always starts at same position */}
                <p className="text-sm text-gray-600 leading-relaxed h-[60px] mt-3 mb-0 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Read More - always at bottom, fixed height 44px */}
                <div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-100 h-[44px]">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="text-xs text-gray-600 truncate max-w-[120px]">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="shrink-0 flex items-center gap-1 text-[#0A4D96] text-sm font-semibold group-hover:gap-2 transition-all"
                  >
                    {t("read")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {t("viewAll")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
