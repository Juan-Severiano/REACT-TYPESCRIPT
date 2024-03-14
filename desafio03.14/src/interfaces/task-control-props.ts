import Task from "./task"

export interface TaskControlProps {
  handleSetTask: (task: Task) => void
  tasks: Array<Task>
}
