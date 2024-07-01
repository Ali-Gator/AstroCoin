import { sql } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
} from 'drizzle-orm/pg-core';

export const boosts = pgTable(
  'boosts',
  {
    id: serial('id').primaryKey(),
    type: text('type').notNull(),
    itemsLeft: integer('items_left').notNull().default(1),
    updatedAt: timestamp('updated_at')
      .notNull()
      .default(sql`now()`),

    ownerTelegramId: text('owner_telegram_id').notNull(),
  },
  (table) => ({
    unq: unique().on(table.type, table.ownerTelegramId),
  }),
);

export type InsertBoosts = typeof boosts.$inferInsert;
export type SelectBoosts = typeof boosts.$inferSelect;
