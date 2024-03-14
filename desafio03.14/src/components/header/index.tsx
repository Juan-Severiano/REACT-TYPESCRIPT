import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import './header.css'

const Header = () => {
  return (
    <header className="header-container">
        <FontAwesomeIcon icon={faTasks} color="#ffd708" size="2x" />
        <h2>Task Manager</h2>
    </header>
  )
}

export default Header