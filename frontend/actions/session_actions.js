import * as request from '../requests/session_requests'
import store from '../store'

export const RECEIVE_CURRENT_USER = "receive current user"
export const RECEIVE_ERRORS = "receive errors"

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

let success = user => store.dispatch(receiveCurrentUser(user))
let error = errors => store.dispatch(receiveErrors(errors))

export function signup(user) {
  request.signup(user, success, error)
}

export function login(user) {
  request.login(user, success, error)
}

export function logout() {
  request.logout(success, error)
}
