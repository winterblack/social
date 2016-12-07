export const signup = (data, success, error) => {
  $.ajax({method: 'post', url: 'api/users', data, success, error})
}

export const login = (data, success, error) => {
  $.ajax({method: 'post', url: 'api/session', data, success, error})
}

export const logout = (success, error) => {
  $.ajax({method: 'delete', url: 'api/session', success, error})
}
