import { db } from "@/config/db";
import { users } from "@/drizzle/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch all users from the database
    const allUsers = await db.select().from(users);

    return NextResponse.json({
      success: true,
      count: allUsers.length,
      users: allUsers,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
