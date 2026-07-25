"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addBlog, likeBlog } from "../services/blogs";

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const url = formData.get("url") as string;

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
