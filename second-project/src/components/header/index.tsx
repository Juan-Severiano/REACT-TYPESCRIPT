import { useContext } from 'react'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth-context'

export function Header() {
  const authContext = useContext(AuthContext)
  const { signed } = authContext
  const loadingAuth = false
  return (
    <div>
      <header>
        <Link to='/'>
          <img src={logoImg} alt='Logo do Web Carros' />
        </Link>
        {!loadingAuth && signed && (
          <Link to='/dashboard'>
            <h4>Icone Dashboard</h4>
          </Link>
        )}
        {!loadingAuth && !signed && (
          <Link to='/login'>
            <h4>Icone Login</h4>
          </Link>
        )}
      </header>
    </div>
  )
}
