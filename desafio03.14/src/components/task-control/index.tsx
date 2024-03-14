import Task from '../../interfaces/task'
import { TaskControlProps } from '../../interfaces/task-control-props'
import TaskCreate from '../task-create'

const TaskControl = ({ handleSetTask, tasks }: TaskControlProps) => {

  const receiveNewTask = (task: Task) => {
    task && handleSetTask(task)
  }

  return (
    <div className="container-tasks">
      <TaskCreate currentTasks={tasks} emitTask={receiveNewTask} />
    </div>
  )
}

export default TaskControl