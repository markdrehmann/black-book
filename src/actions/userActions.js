export const fetchUsers = () => {
  return (dispatch) => {dispatch({type: 'LOADING_USERS'});
  fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
    .then(res => res.json())
    .then(data => {dispatch({type: 'ADD_CATS', cats: data.images})})
  }
}

// obviously this needs to be edited from Cats to Users