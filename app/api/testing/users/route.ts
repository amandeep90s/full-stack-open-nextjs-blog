import { db } from "@/db";
import { users } from "@/db/schema";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "This endpoint is not available in production" },
      { status: 403 },
    );
  }

  const { username, name, password } = await request.json();

  const passwordHash = await bcrypt.hash(password, 10);

  const [user] = await db
    .insert(users)
    .values({ username, name, passwordHash })
    .returning();

  return NextResponse.json(user, { status: 201 });
};
