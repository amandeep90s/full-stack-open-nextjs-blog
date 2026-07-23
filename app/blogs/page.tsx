import { getBlogs } from "../services/blogs";

const Blogs = () => {
  const blogs = getBlogs();
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-medium">Blogs</h1>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="border border-gray-300 p-4 mb-4 rounded space-y-4"
        >
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <p>Likes: {blog.likes}</p>
          <a
            href={blog.url}
            className="bg-emerald-600 inline-block text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
