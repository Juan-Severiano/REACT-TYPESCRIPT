import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './tasks.css'
import Task from "../../interfaces/task"

const Tasks = ({ taskList, taskDoneList }: { taskList: Array<Task>, taskDoneList: Array<Task> }) => {
  return (
    <div className="tasks-big-container">
      <header className="tasks-header">
        <FontAwesomeIcon icon={faCheckSquare} color="#7af1a7" size="2x" />
        <h2>Confira suas tarefas</h2>
      </header>
      <h4>A fazer</h4>
      {taskList.length > 0 && taskList.map((movement) => (
        <div key={movement.id} className="tasks-container">
          <div className="movementation">
            <h2>{movement.name}</h2>
          </div>
        </div>
      ))}
      <h4>Feitas</h4>
      {taskDoneList.length > 0 && taskDoneList.map((movement) => (
        <div key={movement.id} className="tasks-container">
          <div className="movementation">
            <h2>{movement.name}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Tasks