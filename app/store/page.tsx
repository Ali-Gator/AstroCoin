import {
  horizontalCardDataFoost,
  horizontalCardDataStore,
} from '@/tests/mockData';
import { HorizontalCard } from '@/app/store/components/HorizontalCard';

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="font-termina600 text-2xl">Foost</h1>
      <ul
        className="grid grid-cols-[48px_minmax(min-content,_1fr)_112px] gap-x-2 gap-y-7 items-center
      mt-6 p-4 rounded-3xl bg-background-cards"
      >
        {horizontalCardDataFoost.map((data) => (
          // TODO: use any id as key instead title
          <HorizontalCard key={data.title} {...data} />
        ))}
      </ul>
      <h2 className="font-termina600 text-2xl mt-6">Store</h2>
      <ul
        className="grid grid-cols-[48px_minmax(min-content,_1fr)_112px] gap-x-2 gap-y-7 items-center
      mt-4 p-4 rounded-3xl bg-background-cards"
      >
        {horizontalCardDataStore.map((data) => (
          // TODO: use any id as key instead title
          <HorizontalCard key={data.title} {...data} />
        ))}
      </ul>
    </div>
  );
}
