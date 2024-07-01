import { initializeBalance, getBalanceByTelegramId, updateBalance } from '@/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { telegramId } = await req.json();
  const balance = await getBalanceByTelegramId(telegramId);

  if (!balance || balance.length === 0) {
    const newBalance = await initializeBalance({
      ownerTelegramId: telegramId,
    });
    return NextResponse.json(newBalance);
  } else {
    return NextResponse.json(balance[0]);
  }
}

export async function PUT(req: Request) {
  const { telegramId, newBalance } = await req.json();
  try {
    const balance = await updateBalance(newBalance, telegramId);
    return NextResponse.json({ balance });
  } catch (error) {
    return NextResponse.json({ status: 400, error });
  }
}
