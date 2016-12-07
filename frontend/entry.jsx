import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import { receiveCurrentUser } from './actions/session_actions'

import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  let currentUser = window.currentUser
  if (currentUser) {
    store.dispatch(receiveCurrentUser(currentUser))
  }
  ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})
