import { Movement } from "./movements";

export interface FinanceControlsProps {
  handleSetMovement: (movement: Movement) => void
  balance: number
  expenses: number
}