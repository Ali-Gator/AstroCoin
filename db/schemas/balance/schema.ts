import { sql } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const balance = pgTable('balance', {
  id: serial('id').primaryKey(),
  staticBalance: integer('static_balance').notNull().default(0),
  balanceUpdatedAt: timestamp('balance_updated_at')
    .notNull()
    .default(sql`now()`),

  tokenGain: integer('token_gain').notNull().default(1),

  staticEnergyLevel: integer('static_energy_level').notNull().default(1000),
  energyUpdatedAt: timestamp('energy_updated_at')
    .notNull()
    .default(sql`now()`),
  energyCapacity: integer('energy_capacity').notNull().default(1000),

  ownerTelegramId: text('owner_telegram_id').notNull().unique(),
});

export type InsertBalance = typeof balance.$inferInsert;
export type SelectBalance = typeof balance.$inferSelect;
