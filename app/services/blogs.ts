import { db } from "@/db";
import { blogs, lower, readingList } from "@/db/schema";
import { and, eq, like } from "drizzle-orm";
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

  const [blog] = await db
    .insert(blogs)
    .values({ title, author, url, userId: user.id })
    .returning();

  await db.insert(readingList).values({ userId: user.id, blogId: blog.id });
};

export const getBlogById = async (id: number) => {
  const blog = await db.query.blogs.findFirst({
    where: eq(blogs.id, id),
  });

  return blog;
};

export const getReadingListEntry = async (blogId: number, userId: number) => {
  return db.query.readingList.findFirst({
    where: and(eq(readingList.userId, userId), eq(readingList.blogId, blogId)),
  });
};

export const getReadingList = async (userId: number) => {
  return db.query.readingList.findMany({
    where: eq(readingList.userId, userId),
    with: { blog: true },
  });
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
