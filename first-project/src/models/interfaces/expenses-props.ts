import { Movement } from "./movements";

export interface ExpenseProps {
  emitMovement: (movement: Movement) => void
  currentExpenses: number
  currentBalance: number
}

type asd = Array<ExpenseProps>