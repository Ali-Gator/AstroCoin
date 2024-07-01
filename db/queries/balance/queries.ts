import { SelectBalance, db } from '@/db';
import { InsertBalance, balance } from '@/db';
import { eq, sql } from 'drizzle-orm';

export async function initializeBalance(data: InsertBalance) {
  await db.insert(balance).values(data).returning();
}

export async function getBalanceByTelegramId(
  ownerTelegramId: SelectBalance['ownerTelegramId'],
): Promise<Array<SelectBalance>> {
  return db
    .select()
    .from(balance)
    .where(eq(balance.ownerTelegramId, ownerTelegramId));
}

export async function updateBalance(
  newBalance: Partial<InsertBalance>,
  ownerTelegramId: SelectBalance['ownerTelegramId'],
) {
  await db
    .update(balance)
    .set({
      ...newBalance,
      balanceUpdatedAt: sql`now()`,
      energyUpdatedAt: sql`now()`,
    })
    .where(eq(balance.ownerTelegramId, ownerTelegramId))
    .returning();
}
