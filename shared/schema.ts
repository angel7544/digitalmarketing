import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  progress: jsonb("progress").default({}).notNull(),
});

export const modules = pgTable("modules", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(), // 'seo', 'crm', 'social'
  order: integer("order").notNull(),
});

export const userTips = pgTable("user_tips", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  tip: text("tip").notNull(),
  category: text("category").notNull(),
  createdAt: text("created_at").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
  status: text("status").default('new').notNull(), // 'new', 'read', 'replied'
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertModuleSchema = createInsertSchema(modules);
export const insertTipSchema = createInsertSchema(userTips);
export const insertContactSchema = createInsertSchema(contactMessages).omit({ 
  id: true,
  status: true
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Module = typeof modules.$inferSelect;
export type UserTip = typeof userTips.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;