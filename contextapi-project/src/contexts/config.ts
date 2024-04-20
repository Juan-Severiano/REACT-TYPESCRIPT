import { ThemeAction } from "../types/theme-reducer"
import { themeInitialState, themeReducer } from "./reducers/theme-reducer"

export const InitialState = {
  theme: themeInitialState,
}

export const Reducers = (state: InitialStateType, action: ActionType) => ( {
    theme: themeReducer(state.theme, action)
  }
)

export type InitialStateType = typeof InitialState
export type ActionType = ThemeAction
