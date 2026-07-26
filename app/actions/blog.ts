"use server";

import { auth } from "@/app/auth";
import { addBlog, likeBlog } from "@/app/services/blogs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createBlog = async (
  prevState: {
    error: string;
    fields: { title: string; author: string; url: string };
    success: boolean;
  },
  formData: FormData,
) => {
  const session = await auth();
  if (!session) redirect("/login");

  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const url = formData.get("url") as string;
  const fields = { title, author, url };

  if (!title.trim() || title.length < 5) {
    return {
      error: "Title must be at least 5 characters long",
      fields,
      success: false,
    };
  }

  if (!author.trim() || author.length < 5) {
    return {
      error: "Author must be at least 5 characters long",
      fields,
      success: false,
    };
  }

  if (!url.trim() || url.length < 5) {
    return {
      error: "URL must be at least 5 characters long",
      fields,
      success: false,
    };
  }

  await addBlog(title, author, url);
  revalidatePath("/blogs");

  return {
    error: "",
    fields: { title: "", author: "", url: "" },
    success: true,
  };
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
