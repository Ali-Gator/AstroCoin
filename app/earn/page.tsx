import { TasksList } from './components/TasksList';
import { TopHeader } from './components/TopHeader';

export default function EarnPage() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <TopHeader />
      <TasksList />
    </div>
  );
}
