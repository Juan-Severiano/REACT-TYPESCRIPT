import { useEffect, useState } from "react"
import Header from "./components/header"
import TaskControl from "./components/task-control"
import Task from "./interfaces/task"

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [doneTasks, setDoneTasks] = useState<Array<Task>>([]);

  useEffect(() => {
    console.log(tasks)
    console.log(doneTasks)
  }, [tasks, doneTasks])

  const setNewTask = (task: Task, id?: string) => {
    if (id) {
      setDoneTasks(prevTasks => [task, ...prevTasks])
      setTasks(prevTasks => prevTasks.filter(t => t.id !== id))
      return
    }
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
  }

  return (
    <>
      <Header />
      <TaskControl
        tasks={tasks}
        tasksFinally={doneTasks}
        handleSetTask={setNewTask}
      />
    </>
  )
}

export default App
