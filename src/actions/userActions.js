export const fetchUsers = () => {
  return (dispatch) => {dispatch({type: 'LOADING_USERS'});
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {dispatch({type: 'ADD_USERS', users: data})})
  }
}

// obviously this needs to be edited from Cats to Users