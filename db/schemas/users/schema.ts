import { sql } from 'drizzle-orm';
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  telegramId: text('telegram_id').primaryKey().unique(),
  claimableBalance: integer('claimable_balance').notNull().default(0),
  address: text('address').default(''),
  createdAt: timestamp('created_at')
    .notNull()
    .default(sql`now()`),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
