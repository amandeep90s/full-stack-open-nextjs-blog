"use server";

import { auth } from "@/app/auth";
import { addBlog, likeBlog } from "@/app/services/blogs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createBlog = async (
  prevState: { error: string },
  formData: FormData,
) => {
  const session = await auth();
  if (!session) redirect("/login");

  const title = formData.get("title") as string;
  if (!title.trim() || title.length < 5) {
    return { error: "Title must be at least 5 characters long" };
  }

  const author = formData.get("author") as string;
  if (!author.trim() || author.length < 5) {
    return { error: "Author must be at least 5 characters long" };
  }

  const url = formData.get("url") as string;
  if (!url.trim() || url.length < 5) {
    return { error: "URL must be at least 5 characters long" };
  }

  await addBlog(title, author, url);
  revalidatePath("/blogs");
  redirect("/blogs");
};

export const likeBlogPost = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const blogId = Number(id);

  if (!isNaN(blogId)) {
    await likeBlog(blogId);
    revalidatePath("/blogs");
    revalidatePath(`/blogs/${blogId}`);
  }
};
