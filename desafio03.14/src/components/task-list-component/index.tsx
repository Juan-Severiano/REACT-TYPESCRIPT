import Task from "../../interfaces/task"

const TaskListComponent = ({ task, finallyTask }: { task: Task, finallyTask: (task: Task, id: string) => void }) => {
  return (
    <div>
      { task.name }
      <button onClick={() => {
        finallyTask(task, task.id!)
        console.log(task)
      }}>deletar</button>
    </div>
  )
}

export default TaskListComponent
