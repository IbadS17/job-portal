"use server";

import { db } from "@/config/db";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import * as argon2 from "argon2";

type LoginData = {
  email: string;
  password: string;
};

export const loginUserAction = async (data: LoginData) => {
  try {
    const { email, password } = data;

    const [user] = await db.select().from(users).where(eq(users.email, email));

    if (user) {
      if (!user) {
        return {
          status: "ERROR",
          message: "Email Already Exist",
        };
      }

      const isPasswordCorrect = await argon2.verify(
        user.passwordHash,
        password
      );

      if (!isPasswordCorrect) {
        return {
          status: "ERROR",
          message: "Email or Password is Invalid",
        };
      }
      return {
        status: "SUCCESS",
        message: "Logged In Successfull",
      };
    }
  } catch (error) {
    return {
      status: "ERROR",
      message: "Something went wrong. Please try again later! ",
    };
  }
};
