export const fetchUser = () => {
  return (dispatch) => {dispatch({type: 'LOADING_USER'});
  fetch("https://localhost:3000/users/4")
    .then(res => res.json())
    .then(data => {dispatch({type: 'ADD_USER', user: data})})
  }
}

// obviously this needs to be edited from Cats to Users