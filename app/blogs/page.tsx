import { getBlogs } from "@/app/services/blogs";
import Link from "next/link";

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const { filter } = await searchParams;

  const blogs = await getBlogs(filter);

  return (
    <div className="container mx-auto space-y-4">
      <h1 className="text-3xl font-medium">Blogs</h1>

      <form method="GET" action="/blogs" className="flex gap-2">
        <input
          type="search"
          name="filter"
          id="filter"
          data-testid="filter-input"
          placeholder="Search blogs..."
          defaultValue={filter}
          className="border border-gray-300 rounded-sm px-3 py-2 flex-1"
        />
        <button
          type="submit"
          data-testid="search-button"
          className="bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
        >
          Search
        </button>
        {filter && (
          <Link
            href="/blogs"
            className="bg-rose-600 text-white py-2 px-4 rounded-sm hover:bg-rose-700 transition-colors"
          >
            Clear
          </Link>
        )}
      </form>

      <div
        data-testid="blogs-list"
        className="grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-300 p-4 rounded space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blogs/${blog.id}`} className="hover:underline">
                {blog.title}
              </Link>
            </h2>
            <p>Author: {blog.author}</p>
            <p>{blog.likes} likes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
