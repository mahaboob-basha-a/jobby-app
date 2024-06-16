import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onLogin = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userdata = {
      username,
      password,
    }
    const payload = {
      method: 'POST',
      body: JSON.stringify(userdata),
    }
    const res = await fetch('https://apis.ccbp.in/login', payload)
    if (res.ok) {
      const token = await res.json()
      Cookie.set('jwt_token', token.jwt_token, {expires: 30})
      this.setState({errorMsg: ''})
      const {history} = this.props
      history.replace('/')
    } else {
      const data = await res.json()
      this.setState({errorMsg: `* ${data.error_msg}`})
    }
  }

  render() {
    const {username, password, errorMsg} = this.state
    const isExist = Cookie.get('jwt_token')
    if (isExist !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page">
        <div className="login-card">
          <img
            className="login-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <form>
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              value={username}
              onChange={e => this.setState({username: e.target.value})}
              placeholder="Username"
              id="username"
              type="text"
            />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              value={password}
              onChange={e => this.setState({password: e.target.value})}
              placeholder="Password"
              id="password"
              type="password"
            />
            <br />
            <button onClick={this.onLogin} type="submit" className="login-btn">
              Login
            </button>
            <p className="error-msg">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}
export default Login
