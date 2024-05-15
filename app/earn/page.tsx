import { TasksList } from './components/TasksList';
import { TopHeader } from './components/TopHeader';

export default function EarnPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 gap-8">
      <TopHeader />
      <TasksList />
    </div>
  );
}
