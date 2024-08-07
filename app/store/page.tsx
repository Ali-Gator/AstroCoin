'use client';

import { BoostCard } from '@/app/store/components/BoostCard';
import { useBoundStore } from '@/store';
import { useEffect } from 'react';

export default function Page() {
  const { fetchBoosts, isPlaceholder, boosts, telegramId } = useBoundStore();
  useEffect(() => {
    if (isPlaceholder) {
      fetchBoosts();
    }
  }, [fetchBoosts, isPlaceholder, telegramId]);

  if (!boosts) return null;

  return (
    <div className="p-4">
      <h1 className="font-termina600 text-2xl">Foost</h1>
      <ul className="mt-4 flex flex-col gap-y-2">
        {Object.values(boosts).map((boost) => (
          <BoostCard key={boost.type} {...boost} />
        ))}
      </ul>
    </div>
  );
}
