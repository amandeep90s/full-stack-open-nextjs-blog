"use client";

import { createBlog } from "@/app/actions/blog";
import { useNotification } from "@/app/components/NotificationContext";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

const initialState = {
  error: "",
  fields: { title: "", author: "", url: "" },
  success: false,
};

const NewBlog = () => {
  const [state, formAction] = useActionState(createBlog, initialState);
  const { showNotification } = useNotification();
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      showNotification("Blog created", "success");
      router.push("/blogs");
    }
  }, [state, showNotification, router]);

  return (
    <div className="container mx-auto space-y-4">
      <h1 className="text-3xl font-medium">Create New Blog</h1>

      <form
        action={formAction}
        className="space-y-4 border border-gray-300 p-4 rounded"
      >
        <div>
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            minLength={4}
            defaultValue={state.fields?.title ?? ""}
            className="border border-gray-300 rounded-sm p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="author" className="block mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            minLength={5}
            defaultValue={state.fields?.author ?? ""}
            className="border border-gray-300 rounded-sm p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="url" className="block mb-2">
            URL
          </label>
          <input
            type="url"
            id="url"
            name="url"
            minLength={5}
            defaultValue={state.fields?.url ?? ""}
            className="border border-gray-300 rounded-sm p-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          id="create-blog-button"
          className="bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
        >
          Create Blog
        </button>

        {state.error && <p className="text-red-500 mt-3">{state.error}</p>}
      </form>
    </div>
  );
};

export default NewBlog;
