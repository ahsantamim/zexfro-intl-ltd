import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog/BlogPost";
import { BlogComments } from "@/components/blog/BlogComments";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/api/blog";
import { generatePageSEO } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return generatePageSEO({
    title: post.title,
    description: post.excerpt || `Read ${post.title} on the Zexfro blog.`,
    path: `/blog/${slug}`,
    locale,
    type: "article",
    publishedTime: post.createdAt
      ? new Date(post.createdAt).toISOString()
      : undefined,
    modifiedTime: post.updatedAt
      ? new Date(post.updatedAt).toISOString()
      : undefined,
    image: post.coverImage || undefined,
    keywords: [
      "trade blog",
      "international trade",
      ...(post.category ? [post.category] : []),
    ],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <BlogPost post={post} />
      <RelatedPosts currentPostId={post.id} category={post.category} />
      <BlogComments postId={post.id} />
    </main>
  );
}
