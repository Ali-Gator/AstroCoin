import { sql } from 'drizzle-orm';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  telegramId: text('telegram_id').notNull().unique(),
  createdAt: timestamp('created_at')
    .notNull()
    .default(sql`now()`),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
