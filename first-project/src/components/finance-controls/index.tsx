import { FinanceControlsProps } from '../../models/interfaces/finance-controls-props'
import { Movement } from '../../models/interfaces/movements'
import Balance from '../balance'
import './finance-control.css'

const FinanceControl = ({ handleSetMovement, balance, expenses }: FinanceControlsProps) => {

  const receiveNewMovement = (movement: Movement) => {
    movement && handleSetMovement(movement)
  }
  
  return (
    <div>
      {/* BALANCE */}
      <Balance currentBalance={balance} emitMovement={receiveNewMovement} />
      {/* EXPENSES */}
    </div>
  )
}

export default FinanceControl