import { useState } from 'react'
import './App.css'
import { Movement } from './models/interfaces/movements'
import FinanceControls from './components/finance-controls'
import Header from './components/header'

function App() {
  const [currentBalance, setCurrentBalance] = useState(0) //Saldo atual da conta
  const [currentExpenses, setCurrentExpenses] = useState(0) //despesas atuais da conta
  const [movementsItems, setMovementsItems] = useState<Array<Movement>>([]) //movimentação da conta

  const setNewMovement = (movement: Movement) => {
    if (movement) {
      setMovementsItems((prevMovements) => {
        const movements = [...prevMovements]
        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(),
        })
        return movements
      })

      movement.type === 'input' &&
        setCurrentBalance((prevBalance) => prevBalance + Number(movement.value))

      if (movement.type === 'output') {
        setCurrentExpenses((prevExpenses) => prevExpenses + Number(movement.value))

        currentBalance > 0 && setCurrentBalance((prevBalance) => prevBalance - Number(movement.value))
      }
    }
  }

  return (
    <>
      <Header />
      <FinanceControls
        balance={currentBalance}
        expenses={currentExpenses}
        handleSetMovement={setNewMovement}
      />
    </>
  )
}

export default App