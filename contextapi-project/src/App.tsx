import './App.css'
import Button from './components/button'
import { ContextProvider } from './contexts/context'

function App() {

  return (
    <ContextProvider>
      <h1>Context-API</h1>
      <Button />
    </ContextProvider>
  )
}

export default App
