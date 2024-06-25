import { SelectBalance, db } from '@/db';
import { InsertBalance, balance } from '@/db';
import { eq } from 'drizzle-orm';

export async function initializeBalance(data: InsertBalance) {
  await db.insert(balance).values(data);
}

export async function getBalanceByTelegramId(
  ownerTelegramId: SelectBalance['ownerTelegramId'],
): Promise<Array<SelectBalance>> {
  return db
    .select()
    .from(balance)
    .where(eq(balance.ownerTelegramId, ownerTelegramId));
}
