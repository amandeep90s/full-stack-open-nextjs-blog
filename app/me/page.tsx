import { markAsRead } from "@/app/actions/blog";
import { generateToken } from "@/app/actions/users";
import { getReadingList } from "@/app/services/blogs";
import { getCurrentUser } from "@/app/services/session";
import Link from "next/link";
import { redirect } from "next/navigation";

const MePage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const readingList = await getReadingList(user.id);
  const unread = readingList.filter((e) => !e.read);
  const read = readingList.filter((e) => e.read);

  return (
    <div className="container mx-auto space-y-8 max-w-2xl">
      <h1 className="text-3xl font-medium">My Profile</h1>

      <div className="space-y-2">
        <p>
          <span className="font-medium">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-medium">Username:</span> {user.username}
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-medium">API Token</h2>
        {user.token ? (
          <p className="font-mono border border-gray-100 rounded p-3 break-all text-sm">
            {user.token}
          </p>
        ) : (
          <p className="text-gray-500">No token has been generated yet.</p>
        )}
        <form action={generateToken}>
          <button
            type="submit"
            className="bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
          >
            Generate new token
          </button>
        </form>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-medium">Reading List</h2>

        {readingList.length === 0 ? (
          <p className="text-gray-500">Your reading list is empty.</p>
        ) : (
          <>
            <div className="space-y-3">
              <h3 className="font-medium text-gray-700">
                Unread ({unread.length})
              </h3>
              {unread.length === 0 ? (
                <p className="text-gray-500 text-sm">No unread blogs.</p>
              ) : (
                <ul className="space-y-2">
                  {unread.map((entry) => (
                    <li
                      key={entry.id}
                      className="flex items-center justify-between border border-gray-200 rounded p-3"
                    >
                      <div className="space-y-1">
                        <Link
                          href={`/blogs/${entry.blog.id}`}
                          className="font-medium text-emerald-600 hover:underline"
                        >
                          {entry.blog.title}
                        </Link>
                        <p className="text-sm text-gray-500">
                          by {entry.blog.author}
                        </p>
                      </div>
                      <form action={markAsRead}>
                        <input type="hidden" name="entryId" value={entry.id} />
                        <button
                          type="submit"
                          className="text-sm bg-gray-100 text-gray-700 py-1 px-3 rounded-sm hover:bg-gray-200 transition-colors"
                        >
                          Mark as read
                        </button>
                      </form>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-gray-700">
                Read ({read.length})
              </h3>
              {read.length === 0 ? (
                <p className="text-gray-500 text-sm">No read blogs yet.</p>
              ) : (
                <ul className="space-y-2">
                  {read.map((entry) => (
                    <li
                      key={entry.id}
                      className="flex items-center justify-between border border-gray-200 rounded p-3 opacity-60"
                    >
                      <div className="space-y-1">
                        <Link
                          href={`/blogs/${entry.blog.id}`}
                          className="font-medium text-emerald-600 hover:underline"
                        >
                          {entry.blog.title}
                        </Link>
                        <p className="text-sm text-gray-500">
                          by {entry.blog.author}
                        </p>
                      </div>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                        Read
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MePage;
