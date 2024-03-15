import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../button'
import './task-create.css'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { TaskCreateProps } from '../../interfaces/task-create'

export default function TaskCreate({ currentTasks, emitTask }: TaskCreateProps) {
  const [renderInputForm, setRenderInputForm] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputDate, setInputDate] = useState('')

  const handleRenderInputForm = () => setRenderInputForm(!false)

  const hideInputForm = () => {
    setRenderInputForm(false)
    setIsFormValid(true)
    setInputName('')
    setInputValue('')
  }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputName.trim().length === 0 || inputValue.trim().length === 0 || isFormValid) {
      setIsFormValid(false)
      return
    }

    hideInputForm()
    emitTask({
      name: inputName,
      description: inputValue,
      isDone: false,
      dueDate: inputDate
    })
  }

  const handleInputNameForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement
    const eventValue = eventTarget.value
    inputName.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false)
    setInputName(eventValue)
  }

  const handleInputValueForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement
    const eventValue = eventTarget.value
    inputValue.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false)
    setInputValue(eventValue)
  }

  const handleInputDateForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement
    const eventValue = eventTarget.value
    inputValue.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false)
    setInputDate(eventValue)
  }

  return (
    <>
      <div className="task-container">
        <div className="task-card">
          <header className="task-header">
            <FontAwesomeIcon icon={faCirclePlus} color="#7af1a7" size="2x" />
            <h2>Criar nova tarefa</h2>
          </header>
          <h3>{currentTasks.length > 0 ? `Sua última tarefa foi: ${currentTasks[0].name}` : "Crie suas novas tarefas"}</h3>

          {!renderInputForm && (
            <Button
              action={handleRenderInputForm}
              title="Criar"
              priority='Input'
            />
          )}

          {renderInputForm && (
            <form onSubmit={formSubmitHandler}>
              <div className="input-form-container">
                <input
                  type="text"
                  placeholder="Nome"
                  className="task-input"
                  value={inputName}
                  onChange={handleInputNameForm}
                />
                <input
                  type="text"
                  placeholder="Descricao"
                  className="task-input"
                  value={inputValue}
                  onChange={handleInputValueForm}
                />
                <input
                  type="date"
                  placeholder="Data"
                  className="task-input"
                  value={inputDate}
                  onChange={handleInputDateForm}
                />
              </div>
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
            </form>
          )}
        </div>
      </div>
    </>
  )

}
