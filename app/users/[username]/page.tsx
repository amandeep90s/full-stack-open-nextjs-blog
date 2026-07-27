import { getUserWithBlogs } from "@/app/services/users";
import Link from "next/link";
import { notFound } from "next/navigation";

const User = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;

  const user = await getUserWithBlogs(username);

  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto border border-gray-300 rounded space-y-4 p-4">
      <h1 className="text-3xl font-medium">{user.name}</h1>
      <p>Username: {user.username}</p>

      <h2 className="text-2xl font-medium">Blogs</h2>
      <ul className="list-disc list-inside">
        {user.blogs.map((blog) => (
          <li key={blog.id}>
            <Link
              href={`/blogs/${blog.id}`}
              className="text-emerald-500 hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
