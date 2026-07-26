"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const registerUser = async (
  prevState: {
    error: string;
    fields: {
      username: string;
      name: string;
      password: string;
      confirmPassword: string;
    };
  },
  formData: FormData,
) => {
  const username = (formData.get("username") as string)?.trim();
  const name = (formData.get("name") as string)?.trim();
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const fields = { username, name, password, confirmPassword };

  if (!username || username.length < 4) {
    return { error: "Username must be at least 4 characters long", fields };
  }

  if (!name || name.length < 4) {
    return { error: "Name must be at least 4 characters long", fields };
  }

  if (!password || password.length < 4) {
    return { error: "Password must be at least 4 characters long", fields };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match", fields };
  }

  const existingUser = await db.query.users.findFirst({
    where: eq(users.username, username),
  });

  if (existingUser) {
    return { error: "Username already exists", fields };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await db.insert(users).values({
    username,
    name,
    passwordHash,
  });

  redirect("/login");
};
