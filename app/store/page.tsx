import {
  horizontalCardDataFoost,
  horizontalCardDataStore,
} from '@/tests/mockData';
import { HorizontalCard } from '@/app/store/components/HorizontalCard';

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="font-termina600 text-2xl">Foost</h1>
      <ul className="mt-4 flex flex-col gap-y-2">
        {horizontalCardDataFoost.map((data) => (
          // TODO: use any id as key instead title
          <HorizontalCard key={data.title} {...data} />
        ))}
      </ul>
      <h2 className="font-termina600 text-2xl mt-6">Store</h2>
      <ul className="mt-4 flex flex-col gap-y-2">
        {horizontalCardDataStore.map((data) => (
          // TODO: use any id as key instead title
          <HorizontalCard key={data.title} {...data} />
        ))}
      </ul>
    </div>
  );
}
