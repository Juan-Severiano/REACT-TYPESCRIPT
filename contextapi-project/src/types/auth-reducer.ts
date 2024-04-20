type User = {
  id: number
  name: string
}

export type UserState = {
  user: User | null
}

type SignInUser = {
  type: 'SIGN_IN',
  payload: { user: User }
}

type SignOutUser = {
  type: 'SIGN_OUT'
}

export type UserAction = SignInUser | SignOutUser
