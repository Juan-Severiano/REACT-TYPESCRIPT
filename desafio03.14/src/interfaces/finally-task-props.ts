import Task from "./task"

export interface FinallyTasksProps {
  currentTasks: Array<Task>
  emitTask: (task: Task) => void
  finallyTasks: Array<Task>
  finallyTask: (task: Task, id: string) => void
}
