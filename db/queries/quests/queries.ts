import { SelectQuests, quests, db } from '@/db';
import { QuestType } from '@/store/quests';
import { and, eq, sql } from 'drizzle-orm';

export async function completeQuest(
  questId: QuestType['id'],
  ownerTelegramId: SelectQuests['ownerTelegramId'],
) {
  await db
    .update(quests)
    .set({ isCompleted: true, updatedAt: sql`now()` })
    .where(
      and(eq(quests.id, questId), eq(quests.ownerTelegramId, ownerTelegramId)),
    )
    .returning();
}

export async function getQuestsByTelegramId(
  ownerTelegramId: SelectQuests['ownerTelegramId'],
): Promise<Array<SelectQuests>> {
  return db
    .select()
    .from(quests)
    .where(eq(quests.ownerTelegramId, ownerTelegramId));
}
