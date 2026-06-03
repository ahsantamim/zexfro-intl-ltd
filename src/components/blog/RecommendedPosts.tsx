"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string | null;
  publishedAt: string | null;
  createdAt: string;
}

interface RecommendedPostsProps {
  currentPostId: string;
  currentTitle: string;
  category: string;
}

function scorePost(
  post: BlogPost,
  currentId: string,
  currentTitle: string,
  category: string
): number {
  if (post.id === currentId) return -1;

  let score = 0;

  if (post.category.toLowerCase() === category.toLowerCase()) {
    score += 3;
  }

  const currentWords = currentTitle
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w.length > 3);
  const postWords = post.title.toLowerCase().split(/\W+/);
  for (const word of currentWords) {
    if (postWords.includes(word)) score += 1;
  }

  const postDate = new Date(post.publishedAt || post.createdAt);
  const daysSince =
    (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24);
  if (daysSince <= 30) score += 1;
  if (daysSince <= 90) score += 0.5;

  return score;
}

export function RecommendedPosts({
  currentPostId,
  currentTitle,
  category,
}: RecommendedPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/blog");
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts ?? []);
        }
      } catch (error) {
        console.error("Error fetching recommended posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const recommended = useMemo(() => {
    const scored = [...posts]
      .filter((p) => p.id !== currentPostId)
      .map((post) => ({
        post,
        score: scorePost(post, currentPostId, currentTitle, category),
      }))
      .sort((a, b) => b.score - a.score);

    const withScore = scored.filter(({ score }) => score > 0).slice(0, 4);
    if (withScore.length >= 3) {
      return withScore.map(({ post }) => post);
    }

    return scored.slice(0, 4).map(({ post }) => post);
  }, [posts, currentPostId, currentTitle, category]);

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Recommended Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
              >
                <div className="aspect-video bg-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (recommended.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Recommended Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommended.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full"
              >
                <div className="relative aspect-video bg-gray-100">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#0a4a9e] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-[#0a4a9e]">
                    Read article →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
