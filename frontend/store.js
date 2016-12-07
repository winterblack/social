import { createStore } from 'redux'
import reducer from './reducers/combine_reducers'

const Store = createStore(reducer)

export default Store
