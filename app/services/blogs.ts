import { db } from "@/db";
import { blogs, lower } from "@/db/schema";
import { eq, like } from "drizzle-orm";
import { getCurrentUser } from "./session";

export const getBlogs = async (filter?: string) => {
  let allBlogs;

  if (filter?.trim()) {
    allBlogs = await db
      .select()
      .from(blogs)
      .where(like(lower(blogs.title), `%${filter.toLowerCase()}%`));
  } else {
    allBlogs = await db.select().from(blogs);
  }

  return allBlogs.sort((a, b) => b.likes - a.likes);
};

export const addBlog = async (title: string, author: string, url: string) => {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Not logged in");
  }

  return await db.insert(blogs).values({
    title,
    author,
    url,
    userId: user.id,
  });
};

export const getBlogById = async (id: number) => {
  const blog = await db.query.blogs.findFirst({
    where: eq(blogs.id, id),
  });

  return blog;
};

export const likeBlog = async (id: number) => {
  const blog = await getBlogById(id);
  if (blog) {
    await db
      .update(blogs)
      .set({ likes: blog.likes + 1 })
      .where(eq(blogs.id, id));
  }
};
