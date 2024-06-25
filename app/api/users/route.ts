import { createUser, getUserByTelegramId } from '@/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { telegramId } = await req.json();
  const users = await getUserByTelegramId(telegramId);

  if (!users || users.length === 0) {
    const newUser = await createUser({
      telegramId,
    });
    return NextResponse.json(newUser);
  } else {
    return NextResponse.json(users[0]);
  }
}
