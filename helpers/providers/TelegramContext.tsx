'use client';
import Script from 'next/script';
import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const TelegramContext = createContext<{
  telegramApp?: Telegram;
  isLoading: boolean;
}>({ isLoading: true });

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [webApp, setWebApp] = useState<Telegram | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const goBack = () => {
      router.back();
    };
    const app = window.Telegram;

    if (app) {
      app.WebApp.ready();
      app.WebApp.expand();
      app.WebApp.enableClosingConfirmation();
      setWebApp(app);
      setLoading(false);
      app.WebApp.setHeaderColor('#000');
      app.WebApp.setBackgroundColor('#000');
    }
  }, []);

  useEffect(() => {
    if (!webApp) {
      return;
    }

    const { show, onClick, hide } = webApp.WebApp.BackButton;

    if (pathname !== '/') {
      show();
      onClick(() => router.back());
    } else {
      hide();
    }
  }, [webApp, pathname, router]);

  return (
    <TelegramContext.Provider value={{ telegramApp: webApp, isLoading }}>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);
