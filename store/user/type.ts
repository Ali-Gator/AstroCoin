export interface UserSlice {
  username: string;
  telegramId: string | null;

  setTelegramId: (telegramId?: string) => void;
  fetchUser: (telegramId: string) => Promise<any | null>;
}
