import { likeBlogPost } from "@/app/actions/blog";
import { getBlogById } from "@/app/services/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const blog = await getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto border border-gray-300 p-4 mb-4 rounded space-y-4">
      <h1 className="text-3xl font-medium">{blog.title}</h1>
      <p>Author: {blog.author}</p>
      <p>
        URL:{" "}
        <a
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {blog.url}
        </a>
      </p>

      <p>Likes: {blog.likes}</p>

      <div className="flex items-center gap-4">
        <form action={likeBlogPost}>
          <input type="hidden" name="id" value={blog.id} />
          <button
            type="submit"
            className="bg-rose-600 text-white py-2 px-4 rounded-sm hover:bg-rose-700 transition-colors"
          >
            Like
          </button>
        </form>
        <Link
          href="/blogs"
          className="bg-emerald-600 inline-block text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
