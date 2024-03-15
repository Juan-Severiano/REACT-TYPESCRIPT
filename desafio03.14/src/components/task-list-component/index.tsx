import Task from "../../interfaces/task"
import Button from "../button"

const TaskListComponent = ({ task, finallyTask }: { task: Task, finallyTask: (task: Task, id: string) => void }) => {
  return (
    <div className="movementation">
      <h2>{task.name}</h2>
      <Button
        title="Deletar"
        action={() => {
          finallyTask(task, task.id!)
          console.log(task)
        }}
        type="button"
        priority="Danger"
      />
    </div>
  )
}

export default TaskListComponent
