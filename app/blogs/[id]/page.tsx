import { addToReadingList, likeBlogPost } from "@/app/actions/blog";
import { getBlogById, getReadingListEntry } from "@/app/services/blogs";
import { getCurrentUser } from "@/app/services/session";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));
  return {
    title: blog ? blog.title.slice(0, 50) : "Blog not found",
  };
};

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [blog, user] = await Promise.all([
    getBlogById(Number(id)),
    getCurrentUser(),
  ]);

  if (!blog) {
    notFound();
  }

  const isOwner = user?.id === blog.userId;
  const inReadingList =
    user && !isOwner ? await getReadingListEntry(blog.id, user.id) : null;

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

        {user &&
          !isOwner &&
          (inReadingList ? (
            <span className="text-gray-500 text-sm">
              Already in reading list
            </span>
          ) : (
            <form action={addToReadingList}>
              <input type="hidden" name="blogId" value={blog.id} />
              <button
                type="submit"
                className="bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
              >
                Add to reading list
              </button>
            </form>
          ))}

        <Link
          href="/blogs"
          className="bg-gray-600 inline-block text-white py-2 px-4 rounded-sm hover:bg-gray-700 transition-colors"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
