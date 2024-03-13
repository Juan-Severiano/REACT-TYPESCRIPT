import { useState } from 'react'
import './App.css'
import FinanceControls from './components/finance-controls'
import Header from './components/header'
import { Movement } from './models/interfaces/movements';

function App() {
  const [currentBallance, setCurrentBalance] = useState(0);
  const [currentExpenses, setCurrentExpenses] = useState(0);
  const [movementsItems, setMovementsItems] = useState<Array<Movement>>([])

  const setNewMovement = (movement: Movement) => {
    if (movement) {
      setMovementsItems(prevMovements => {
        const movements = [...prevMovements]
        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(),
        })
        return movements
      })
    }

    movement.type === 'input' && setCurrentBalance(prevBalance => prevBalance + Number(movement.value))

    if (movement.type === 'output') {
      setCurrentExpenses(prevExpenses => prevExpenses + Number(movement.value))

      currentBallance > 0 && setCurrentBalance(prevBalance => prevBalance - Number(movement.value))
    }
  }

  return (
    <>
      <Header />
      <FinanceControls
        balance={currentBallance}
        expenses={currentExpenses}
        handleSetMovement={setNewMovement}
      />
    </>
  )
}

export default App
