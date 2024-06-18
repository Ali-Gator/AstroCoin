export interface UserSlice {
  username: string;
  telegramId: string;

  fetchUser: (telegramId: string) => Promise<any | null>;
}
