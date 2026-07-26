"use client";

import { registerUser } from "@/app/actions/users";
import { useActionState } from "react";

const initialState = {
  username: "",
  name: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterPage() {
  const [state, formAction] = useActionState(registerUser, {
    error: "",
    fields: initialState,
  });

  return (
    <div className="grow space-y-4 flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-medium">Register</h1>
      <form
        action={formAction}
        className="space-y-4 border border-gray-300 p-6 rounded w-full max-w-md"
      >
        <div>
          <label className="block mb-2">Username</label>
          <input
            type="text"
            name="username"
            className="border border-gray-300 rounded-sm p-2 w-full"
            defaultValue={state.fields?.username ?? ""}
            required
          />
        </div>
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded-sm p-2 w-full"
            defaultValue={state.fields?.name ?? ""}
            minLength={4}
            required
          />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="border border-gray-300 rounded-sm p-2 w-full"
            defaultValue={state.fields?.password ?? ""}
            minLength={4}
            required
          />
        </div>
        <div>
          <label className="block mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="border border-gray-300 rounded-sm p-2 w-full"
            defaultValue={state.fields?.confirmPassword ?? ""}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-600 w-full text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
        >
          Register
        </button>

        {state.error && <p className="text-red-500 mt-3">{state.error}</p>}
      </form>
    </div>
  );
}
