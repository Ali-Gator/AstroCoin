import { SelectUser } from '@/db';

export interface UserSlice {
  username: string;
  telegramId: string | null;
  currentUser: SelectUser | null;

  setTelegramId: (telegramId?: string) => void;
  fetchUser: (telegramId: string) => void;
}
