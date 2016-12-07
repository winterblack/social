import React from 'react'
import { connect } from 'react-redux'
import { signup, login, logout } from '../actions/session_actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: "", password: "" }
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    })
  }

  render() {
    let { currentUser, errors, signup, login, logout } = this.props
    let greeting;
    currentUser ? greeting = currentUser.username : greeting = "Welcome to Social"
    let user = {user: this.state}
    return (
      <div>
        <h1>{greeting}</h1>
        <ul>
          {
            errors.map( (error, key) => {
              <li key={key}>{error}</li>
            })
          }
        </ul>
        <label> Username
          <input type="text"
            value={ this.state.username }
            onChange={ this.update("username") } />
        </label>
        <label> Password
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")} />
        </label>
        <br/>
        <button onClick={ () => { signup(user) } }>Sign Up</button>
        <button onClick={ () => { login(user) } }>Log In</button>
        <button onClick={ logout }>Log Out</button>
      </div>
    )
  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors
})

const mapDispatchToProps = () => ({
  signup: (user) => { signup(user) },
  login: (user) => { login(user) },
  logout: () => { logout() }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
