// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else if (username !== '' && password === '') {
      this.setState({errorMessage: "* username and password didn't match"})
    } else if (username === '' && password !== ' ') {
      this.setState({errorMessage: "* username and password didn't match"})
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {errorMessage} = this.state
    return (
      <div className="login-card">
        <img
          className="image-login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="right-card">
          <img
            className="right-card-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
          />
          <br />
          <form onSubmit={this.submitForm}>
            <label htmlFor="userName" className="name-para">
              USERNAME
            </label>
            <br />
            <input
              className="user-name-style"
              type="text"
              placeholder="Username"
              id="userName"
              onChange={this.changeUsername}
            />
            <br />
            <label htmlFor="password" className="name-para">
              PASSWORD
            </label>
            <br />
            <input
              className="user-name-style"
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.changePassword}
            />
            <br />
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
          <p className="error-message">{errorMessage}</p>
        </div>
      </div>
    )
  }
}

export default LoginForm
