export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => {dispatch({type: 'ADD_USERS', users: data})})
  }
}

export const createUser = (user) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    console.log(user)
    fetch("http://localhost:3000/users", {
      method: "POST",
      header: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
}

export const login = (user) => {
  return (dispatch) => {dispatch({type: 'LOGIN'}, user)}
}

export const logout = () => {
  return (dispatch) => {dispatch({type: 'LOGOUT'})}
}