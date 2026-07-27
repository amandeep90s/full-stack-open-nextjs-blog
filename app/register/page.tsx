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
    errorField: null as string | null,
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
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="border border-gray-300 rounded-sm p-2 w-full"
            defaultValue={state.fields?.username ?? ""}
            required
          />
          {state.errorField === "username" && (
            <p
              data-testid="username-error"
              className="text-red-500 text-sm mt-1"
            >
              {state.error}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-sm p-2 w-full"
            defaultValue={state.fields?.name ?? ""}
            minLength={4}
            required
          />
          {state.errorField === "name" && (
            <p data-testid="name-error" className="text-red-500 text-sm mt-1">
              {state.error}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-sm p-2 w-full"
            defaultValue={state.fields?.password ?? ""}
            minLength={4}
            required
          />
          {state.errorField === "password" && (
            <p
              data-testid="password-error"
              className="text-red-500 text-sm mt-1"
            >
              {state.error}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="border border-gray-300 rounded-sm p-2 w-full"
            defaultValue={state.fields?.confirmPassword ?? ""}
            required
          />
          {state.errorField === "passwordConfirm" && (
            <p
              data-testid="passwordConfirm-error"
              className="text-red-500 text-sm mt-1"
            >
              {state.error}
            </p>
          )}
        </div>
        <button
          data-testid="register-button"
          type="submit"
          className="bg-emerald-600 w-full text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
}
