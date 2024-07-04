import { SelectQuests, quests, db, InsertQuests } from '@/db';
import { QuestType } from '@/store/quests';
import { quests as questsData } from '@/store/quests/data';
import { and, eq, sql } from 'drizzle-orm';

export async function completeQuest(
  questName: QuestType['name'],
  ownerTelegramId: SelectQuests['ownerTelegramId'],
) {
  await db
    .update(quests)
    .set({ isCompleted: true, updatedAt: sql`now()` })
    .where(
      and(
        eq(quests.name, questName),
        eq(quests.ownerTelegramId, ownerTelegramId),
      ),
    )
    .returning();
}

export async function createQuests(
  ownerTelegramId: SelectQuests['ownerTelegramId'],
) {
  await db
    .insert(quests)
    .values(
      Object.values(questsData).map(
        (quest): InsertQuests => ({
          ...quest,
          ownerTelegramId,
        }),
      ),
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
