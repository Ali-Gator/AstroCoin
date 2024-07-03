import { useBoundStore } from '@/store';
import { TaskItem } from '../TaskItem.tsx/TaskItem';

export const TasksList = () => {
  const { quests: questsObject, isPlaceholder } = useBoundStore();
  const quests = Object.values(questsObject);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {quests.map((quest) => (
        <TaskItem key={quest.id} {...quest} isCompleted={isPlaceholder} />
      ))}
    </div>
  );
};
