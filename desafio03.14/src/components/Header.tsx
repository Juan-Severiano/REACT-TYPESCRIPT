
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
  return (
    <header className="header-container">
        <FontAwesomeIcon icon={faTasks} color="#7af1a7" size="2x" />
        <h2>Task Manager</h2>
    </header>
  )
}

export default Header