import { getUsers } from "@/app/services/users";
import Link from "next/link";

const Users = async () => {
  const users = await getUsers();

  return (
    <div className="container mx-auto space-y-4">
      <h1 className="text-3xl font-medium">Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="border border-gray-300 p-4 mb-4 rounded space-y-4"
        >
          <Link
            href={`/users/${user.username}`}
            className="text-xl font-semibold mb-2 hover:underline text-emerald-600 transition-colors"
          >
            {user.name}
          </Link>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
