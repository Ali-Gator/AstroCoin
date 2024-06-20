import { createUser, getUserByTelegramId } from '@/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { telegramId } = await req.json();
  console.log('🚀 ~ GET ~ telegramId: route', telegramId);

  // Here you would typically fetch the user from your database using the telegramId
  const users = await getUserByTelegramId(telegramId);

  if (!users || users.length === 0) {
    const newUser = await createUser({
      telegramId,
    });
    console.log('🚀 ~ POST ~ newUser:', newUser);
  }
  console.log('🚀 ~ POST ~ users:', users);

  return NextResponse.json(users);
}
