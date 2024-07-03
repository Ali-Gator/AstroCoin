import { completeQuest, getQuestsByTelegramId } from '@/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { telegramId } = await req.json();
  const quests = await getQuestsByTelegramId(telegramId);

  try {
    if (!quests || quests.length === 0) {
      return NextResponse.json({ quests: [] });
    } else {
      return NextResponse.json({ quests });
    }
  } catch (error) {
    return NextResponse.json({ status: 400, error });
  }
}

export async function PUT(req: Request) {
  const { telegramId, questId } = await req.json();
  const updatedQuests = await completeQuest(questId, telegramId);

  return NextResponse.json({ updatedQuests });
}
