import { createBoosts, getBoostsByTelegramId, utilizeBoost } from '@/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { telegramId } = await req.json();
  const boosts = await getBoostsByTelegramId(telegramId);

  if (!boosts || boosts.length === 0) {
    const newBoosts = await createBoosts(telegramId);
    return NextResponse.json(newBoosts);
  } else {
    return NextResponse.json(boosts);
  }
}

export async function PUT(req: Request) {
  const { telegramId, itemsLeft, boostType } = await req.json();
  const updatedBoosts = await utilizeBoost(boostType, itemsLeft, telegramId);

  return NextResponse.json({ updatedBoosts });
}
