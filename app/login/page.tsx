"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid username or password");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="grow space-y-4 flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-medium">Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={handleSubmit}
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
          Login
        </button>
      </form>
    </div>
  );
}
