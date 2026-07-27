"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-gray-900 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link
          href="/"
          className="text-white text-3xl font-bold hover:text-emerald-300"
        >
          MyBlog
        </Link>
        <div className="flex items-center gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blogs">Blogs</NavLink>
          <NavLink href="/users">Users</NavLink>

          {session && (
            <>
              <NavLink href="/blogs/new">Add New</NavLink>
            </>
          )}
        </div>

        <div>
          {session ? (
            <div className="space-x-4">
              <em className="text-gray-300 text-sm">
                {session.user?.name} logged in
              </em>

              <NavLink href="/me">My Profile</NavLink>

              <button
                onClick={() => signOut()}
                className="bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-4">
              <NavLink href="/login">Login</NavLink>

              <NavLink href="/register">Register</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
