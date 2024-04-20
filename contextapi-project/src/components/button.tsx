import { useContext } from "react"
import { Context } from "../contexts/context"

export default function Button() {
  const { state, dispatch } = useContext(Context)

  const handleClick = () => {
    if (state.theme.theme === 'light') {
      dispatch({ type: 'CHANGE_THEME', payload: 'dark' })
    } else {
      dispatch({ type: 'CHANGE_THEME', payload: 'light' })
    }
    console.log(state)
  }

  return (
    <>
      <p>O nosso tema é { state.theme.theme }</p>
      <button onClick={handleClick}>
        Button
      </button>
    </>
  )
}
