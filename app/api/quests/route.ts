import { completeQuest, createQuests, getQuestsByTelegramId } from '@/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { telegramId } = await req.json();
  const quests = await getQuestsByTelegramId(telegramId);

  try {
    if (!quests || quests.length === 0) {
      const newQuests = await createQuests(telegramId);
      return NextResponse.json({ quests: newQuests });
    } else {
      return NextResponse.json({ quests });
    }
  } catch (error) {
    return NextResponse.json({ status: 400, error });
  }
}

export async function PUT(req: Request) {
  const { telegramId, questName } = await req.json();
  console.log('🚀 ~ PUT ~ questName:', questName);
  console.log('🚀 ~ PUT ~ telegramId:', telegramId);
  const updatedQuests = await completeQuest(questName, telegramId);
  console.log('🚀 ~ PUT ~ updatedQuests:', updatedQuests);

  return NextResponse.json({ updatedQuests });
}
