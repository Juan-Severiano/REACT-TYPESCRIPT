import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../button'
import './task-create.css'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import TaskListComponent from '../task-list-component'
import { FinallyTasksProps } from '../../interfaces/finally-task-props'

export default function FinallyTask({ currentTasks, finallyTask }: FinallyTasksProps) {
  const [renderInputForm, setRenderInputForm] = useState(false)

  const handleRenderInputForm = () => setRenderInputForm(!false)

  const hideInputForm = () => {
    setRenderInputForm(false)
  }

  return (
    <>
      <div className="task-container">
        <div className="task-card">
          <header className="task-header">
            <FontAwesomeIcon icon={faDeleteLeft} color="#ffd708" size="2x" />
            <h2>Finalizar tarefas</h2>
          </header>
          <h3>{currentTasks.length > 0 ? `Sua última tarefa realizada foi: ${currentTasks[0].name}` : "Encerre suas tarefas"}</h3>

          {!renderInputForm && (
            <Button
              action={handleRenderInputForm}
              title="Encontrar tarefa"
              priority='Input'
            />
          )}

          {renderInputForm && (
            currentTasks.map(task => <TaskListComponent key={task.id} task={task} finallyTask={finallyTask} />)
          )}
          {renderInputForm && (
            <div className="action-form-buttons-container">
              <Button
                title="Cancelar"
                priority="Output"
                action={hideInputForm}
              />
              <Button
                title="Adicionar"
                priority="Input"
                type="submit"
              />
            </div>
          )}
        </div>
      </div>
    </>
  )

}
