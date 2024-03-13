import React, { useState } from "react"
import './expenses.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPercent } from "@fortawesome/free-solid-svg-icons"
import Button from "../button"
import { ExpenseProps } from "../../models/interfaces/expenses-props"

const Expenses = ({ emitMovement, currentExpenses, currentBalance }: ExpenseProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [inputName, setInputName] = useState('');
  const [inputValue, setInputValue] = useState('')

  const handleRenderInputForm = () => setRenderInputForm(!false)
  
  const hideInputForm = () => {
    setRenderInputForm(false)
    setIsFormValid(true)
    setInputName('')
    setInputValue('')
  }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputName.trim().length === 0 || inputValue.trim().length === 0) {
      setIsFormValid(false)
      return
    }

    if (currentBalance >= Number(inputValue)) {
      hideInputForm()
      emitMovement({
        name: inputName,
        value: Number(inputValue),
        type: 'output'
      })
    }
  }

  const handleInputNameForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement
    const eventValue = eventTarget.value
    inputName.trim().length > 0 ? setIsFormValid(true) : setInputName(eventValue)
  }

  const handleInputValueForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement
    const eventValue = eventTarget.value
    inputValue.trim().length > 0 ? setIsFormValid(true) : setInputValue(eventValue)
  }

  return (
    <>
      <div className="expenses-container">
        <div className="expenses-card">
          <header>
            <FontAwesomeIcon icon={faPercent} color="#7af1a7" size="2x" />
            <h2>Despesas</h2>
          </header>
          <h3>{currentExpenses > 0 ? currentExpenses : "R$ 0.00"}</h3>

          {!renderInputForm && (
            <Button
              action={handleRenderInputForm}
              title="Saida"
              priority='output'
              disable={currentBalance === 0}
            />
          )}

          {renderInputForm && (
            <form onSubmit={formSubmitHandler}>
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  className="expenses_input"
                  value={inputName}
                  onChange={handleInputNameForm}
                />
                <input
                  type="text"
                  placeholder="Valor"
                  className="expenses_input"
                  value={inputValue}
                  onChange={handleInputValueForm}
                />
              </div>
              <div>
                <Button
                  title="Cancelar"
                  priority="output"
                  action={hideInputForm}
                />
                <Button
                  title="Adicionar"
                  priority="input"
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

export default Expenses