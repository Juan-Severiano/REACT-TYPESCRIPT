import { useState } from "react"
import Header from "./components/header"
import TaskControl from "./components/task-control"
import Task from "./interfaces/task"

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  // const [doneTasks, setDonetasks] = useState<Array<Task>>([]);

  const setNewTask = (task: Task) => {
    if (task) {
      setTasks((prevTasks) => {
        const tasks = [...prevTasks]
        tasks.unshift({
          ...task,
          id: Math.random().toString(),
        })
        return tasks
      })
    }
    console.log(tasks)
  }

  return (
    <>
      <Header />
      <TaskControl
        tasks={tasks}
        handleSetTask={setNewTask}
      />
    </>
  )
}

export default App
