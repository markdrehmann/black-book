export const fetchUsers = () => {
  return (dispatch) => {dispatch({type: 'LOADING'});
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {dispatch({type: 'ADD_USERS', users: data})})
  }
}

export const login = (user) => {
  return (dispatch) => {dispatch({type: 'LOGIN'}, user)}
}

export const logout = () => {
  return (dispatch) => {dispatch({type: 'LOGOUT'})}
}