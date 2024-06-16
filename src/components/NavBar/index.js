import {Link, withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const NavBar = prop => {
  const onLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = prop
    history.replace('/login')
  }
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/">
          <img
            className="nav-bar-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </Link>
      </li>
      <div className="insider">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </div>
      <li>
        <button type="button" onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </li>
    </ul>
  )
}
export default withRouter(NavBar)
