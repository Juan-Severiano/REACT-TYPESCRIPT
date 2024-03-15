import Task from "./task"

export interface TaskControlProps {
  handleSetTask: (task: Task, id?: string) => void
  tasks: Array<Task>
  tasksFinally: Array<Task>
}
