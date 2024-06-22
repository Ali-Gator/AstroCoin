import { TaskItem } from '../TaskItem.tsx/TaskItem';
import { tasks } from './data';

export const TasksList = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </div>
  );
};
