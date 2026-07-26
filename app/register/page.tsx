"use client";

import { registerUser } from "@/app/actions/users";

export default function RegisterPage() {
  return (
    <div className="grow space-y-4 flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-medium">Register</h1>
      <form
        action={registerUser}
        className="space-y-4 border border-gray-300 p-6 rounded w-full max-w-md"
      >
        <div>
          <label className="block mb-2">Username</label>
          <input
            type="text"
            name="username"
            className="border border-gray-300 rounded-sm p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded-sm p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="border border-gray-300 rounded-sm p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-600 w-full text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
}
