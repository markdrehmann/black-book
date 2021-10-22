// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch({type: 'LOADING'})
//     fetch("http://localhost:3001/users")
//       .then(res => res.json())
//       .then(data => {dispatch({type: 'ADD_USERS', users: data})})
//   }
// }

export const createUser = (user) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    // console.log('INSIDE CREATEUSER, PRE-FETCH', user)
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      // mode: "cors",
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(user => {dispatch({type: 'LOGIN', user})})
  }
}

export const loginUser = (user, history) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    // console.log("Inside loginUser, right before fetch", user)
    fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          dispatch({type: 'LOGIN', response})
          history.push('/')
        }
      })
      .catch(console.log)
      // .then(user => {dispatch({type: 'LOGIN', user})}, console.log('end of fetch', user))
  }
}

export const logout = () => {
  console.log("LOGOUT ACTION")
  return (dispatch) => {dispatch({type: 'LOGOUT'})}
}