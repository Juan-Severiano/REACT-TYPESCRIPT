import { useState } from 'react'
import './App.css'
import FinanceControls from './components/finance-controls'
import Header from './components/header'
import { Movement } from './models/interfaces/movements';

function App() {
  const [currentBallance, setCurrentBalance] = useState(0);
  const [currentExpenses, setCurrentExpenses] = useState(0);
  const [movementsItems, setMovementsItems] = useState<Array<Movement>>([])

  return (
    <>
      <Header />
      <FinanceControls />
    </>
  )
}

export default App
