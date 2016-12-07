import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
// Components
import App from './app'

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
)

export default Root
