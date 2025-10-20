"use server";

import { db } from "@/config/db";
import { users } from "@/drizzle/schema";
import * as argon2 from "argon2";
import { eq, or } from "drizzle-orm";

export const registerAction = async (data: {
  name: string;
  userName: string;
  email: string;
  password: string;
  role: "applicant" | "employer";
}) => {
  try {
    const { name, userName, email, password, role } = data;

    const [user] = await db
      .select()
      .from(users)
      .where(or(eq(users.email, email), eq(users.userName, userName)));

    if (user) {
      if (user.email === email) {
        return {
          status: "ERROR",
          message: "Email Already Exist",
        };
      } else {
        return {
          status: "ERROR",
          message: "Username Already Exist",
        };
      }
    }
    const hashPassword = await argon2.hash(password);

    await db.insert(users).values({
      name,
      userName,
      email,
      passwordHash: hashPassword,
      role,
    });
    return {
      status: "SUCCESS",
      message: "User registered successfully",
    };
  } catch (error) {
    console.error("Error during registration:", error);
    return {
      status: "ERROR",
      message: "User registration failed",
    };
  }
};
