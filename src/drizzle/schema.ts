import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { userAgent } from "next/server";
import { use } from "react";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  userName: varchar({ length: 255 }).notNull().unique(),
  email: varchar({ length: 255 }).notNull().unique(),
  role: mysqlEnum("role", ["admin", "applicant", "employer"]).default(
    "applicant"
  ),
  passwordHash: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  deletedAt: timestamp("deleted_at"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const sessions = mysqlTable("sessions", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: int("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  userAgent: varchar("user_agent", { length: 500 }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
});
