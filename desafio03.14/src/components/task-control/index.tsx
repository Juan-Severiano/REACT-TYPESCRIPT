import Task from '../../interfaces/task'
import { TaskControlProps } from '../../interfaces/task-control-props'
import FinallyTask from '../finally-task'
import TaskCreate from '../task-create'
import './task-control.css'

const TaskControl = ({ handleSetTask, tasks, tasksFinally }: TaskControlProps) => {

  const receiveNewTask = (task: Task) => {
    task && handleSetTask(task)
  }

  const finallyTask = (task: Task, id: string) => {
    id && handleSetTask(task, id)
  }

  return (
    <div className="container-tasks">
      <TaskCreate currentTasks={tasks} emitTask={receiveNewTask} />
      <FinallyTask currentTasks={tasks} emitTask={receiveNewTask} finallyTasks={tasksFinally} finallyTask={finallyTask} />
    </div>
  )
}

export default TaskControl