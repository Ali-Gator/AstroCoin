import { SelectUser, db } from '@/db';
import { InsertUser, users } from '@/db';
import { eq } from 'drizzle-orm';

export async function createUser(data: InsertUser) {
  await db.insert(users).values(data).returning();
}

export async function getUserByTelegramId(
  telegramId: SelectUser['telegramId'],
): Promise<Array<SelectUser>> {
  return db.select().from(users).where(eq(users.telegramId, telegramId));
}
