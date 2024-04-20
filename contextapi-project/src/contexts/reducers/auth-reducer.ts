import { UserAction, UserState } from "../../types/auth-reducer";
import { ActionType } from "../config";

export const authInitialState: UserState = {
  user: null
}

export const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { user: action.payload }
    case 'SIGN_OUT':
      return authInitialState
    default:
      return state
  }
}
