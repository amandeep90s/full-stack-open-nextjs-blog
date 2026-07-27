import { generateToken } from "@/app/actions/users";
import { getCurrentUser } from "@/app/services/session";
import { redirect } from "next/navigation";

const MePage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto space-y-6 max-w-lg">
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
    </div>
  );
};

export default MePage;
