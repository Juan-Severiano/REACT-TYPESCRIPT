import { FinanceControlsProps } from "../../models/interfaces/finance-controls-props"
import { Movement } from "../../models/interfaces/movements"

const FinanceControls = ({ balance, handleSetMovement, expenses }: FinanceControlsProps) => {
  const receiveNewMovement = (movement: Movement) => {
    movement && handleSetMovement(movement)
  }

  return (
    <div>
      
    </div>
  )
}

export default FinanceControls
