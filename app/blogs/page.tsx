import { blogs } from "../services/blogs";

const Blogs = () => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="border border-gray-300 p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <p>Likes: {blog.likes}</p>
          <a href={blog.url} className="text-blue-500 hover:text-white">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
