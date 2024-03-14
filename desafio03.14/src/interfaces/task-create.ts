import Task from "./task";

export interface TaskCreateProps {
  currentTasks: Array<Task>
  emitTask: (task: Task) => void
}
