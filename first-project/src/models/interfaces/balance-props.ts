import { Movement } from "./movements"

export interface BalanceProps {
    emitMovement: ( movement: Movement ) => void
    currentBalance: number
}