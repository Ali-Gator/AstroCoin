import { SelectBoosts, boosts, db } from '@/db';
import { BoostType } from '@/store/boosts';
import { eq, sql } from 'drizzle-orm';

export async function utilizeBoost(boostType: BoostType, itemsLeft: number) {
  await db
    .update(boosts)
    .set({ itemsLeft, updatedAt: sql`now()` })
    .where(eq(boosts.type, boostType))
    .returning();
}

export async function createBoosts(
  ownerTelegramId: SelectBoosts['ownerTelegramId'],
) {
  await db
    .insert(boosts)
    .values([
      {
        type: BoostType.ENERGY,
        itemsLeft: 1,
        updatedAt: sql`now()`,
        ownerTelegramId,
      },
      {
        type: BoostType.FOOD,
        itemsLeft: 3,
        updatedAt: sql`now()`,
        ownerTelegramId,
      },
    ])
    .returning();
}

export async function getBoostsByTelegramId(
  ownerTelegramId: SelectBoosts['ownerTelegramId'],
): Promise<Array<SelectBoosts>> {
  return db
    .select()
    .from(boosts)
    .where(eq(boosts.ownerTelegramId, ownerTelegramId));
}
