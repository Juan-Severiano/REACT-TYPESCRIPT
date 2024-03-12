import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import './header.css'

const Header = (): JSX.Element => {
  return (
    <header className='header-container'>
      <FontAwesomeIcon icon={faSackDollar} color='#7af1a7' size='2x' />
      <h2>My Finances Inc</h2>
    </header>
  )
}

export default Header
