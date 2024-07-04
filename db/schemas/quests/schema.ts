import { sql } from 'drizzle-orm';
import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
} from 'drizzle-orm/pg-core';

export const quests = pgTable(
  'quests',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    isCompleted: boolean('is_completed').notNull().default(false),
    updatedAt: timestamp('updated_at')
      .notNull()
      .default(sql`now()`),

    ownerTelegramId: text('owner_telegram_id').notNull(),
  },
  (table) => ({
    unq: unique().on(table.name, table.ownerTelegramId),
  }),
);

export type InsertQuests = typeof quests.$inferInsert;
export type SelectQuests = typeof quests.$inferSelect;
