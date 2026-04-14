import { BlogSection } from "@/components/home/BlogSection";
import prisma from "@/lib/db/prisma";

export async function BlogSectionServer() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 4,
    select: {
      id: true,
      title: true,
      excerpt: true,
      coverImage: true,
      author: true,
      authorImage: true,
      category: true,
      publishedAt: true,
      slug: true,
    },
  });

  return <BlogSection posts={posts} />;
}
