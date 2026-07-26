"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between mb-4 border-b border-gray-300 pb-4">
      <div>
        <Link href="/" className="text-emerald-500 px-4 hover:text-emerald-300">
          Home
        </Link>
        {" | "}
        <Link
          href="/blogs"
          className="text-emerald-500 px-4 hover:text-emerald-300"
        >
          Blogs
        </Link>
        {" | "}
        <Link
          href="/users"
          className="text-emerald-500 px-4 hover:text-emerald-300"
        >
          Users
        </Link>

        {session && (
          <>
            {" | "}
            <Link
              href="/blogs/new"
              className="text-emerald-500 px-4 hover:text-emerald-300"
            >
              Add New
            </Link>
          </>
        )}
      </div>

      <div>
        {session ? (
          <div className="space-x-4">
            <em>{session.user?.name} logged in </em>

            <button
              onClick={() => signOut()}
              className="bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link
              href="/login"
              className="bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="bg-rose-600 text-white py-2 px-4 rounded-sm hover:bg-rose-700 transition-colors"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
