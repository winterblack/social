import { combineReducers } from 'redux'

import SessionReducer from './session_reducer'

const Reducer = combineReducers({
  session: SessionReducer
})

export default Reducer
