import { SelectBoosts, boosts, db } from '@/db';
import { BoostType } from '@/store/boosts';
import { and, eq, sql } from 'drizzle-orm';

export async function utilizeBoost(
  boostType: BoostType,
  itemsLeft: number,
  ownerTelegramId: SelectBoosts['ownerTelegramId'],
) {
  await db
    .update(boosts)
    .set({ itemsLeft, updatedAt: sql`now()` })
    .where(
      and(
        eq(boosts.type, boostType),
        eq(boosts.ownerTelegramId, ownerTelegramId),
      ),
    )
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
