// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch({type: 'LOADING'})
//     fetch("http://localhost:3001/users")
//       .then(res => res.json())
//       .then(data => {dispatch({type: 'ADD_USERS', users: data})})
//   }
// }

export const createUser = (user, history) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch("http://localhost:3001/users", {
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
          dispatch({type: 'FAILED_REQUEST'})
        } else {
          dispatch({type: 'LOGIN', response})
          history.push('/user')
        }
      })
      .catch(console.log)
  }
}

export const loginUser = (user, history) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
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
          dispatch({type: 'FAILED_REQUEST'})
        } else {
          dispatch({type: 'LOGIN', response})
          history.push('/user')
        }
      })
      .catch(console.log)
  }
}

export const createContact = (contact, history) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch("http://localhost:3001/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
          dispatch({type: 'FAILED_REQUEST'})
        } else {
          dispatch({type: 'ADD_CONTACT', response})
          history.push(`/contacts`)
        }
      })
      .catch(console.log)
  }
}

export const createNote = (note, history) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch("http://localhost:3001/notes", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
          dispatch({type: 'FAILED_REQUEST'})
        } else {
          dispatch({type: 'ADD_NOTE', response})
          history.push(`/contacts/${note.contact_id}`)
        }
      })
      .catch(console.log)
  }
}

export const editContact = (contact, history) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch(`http://localhost:3001/contacts/${contact.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
          dispatch({type: 'FAILED_REQUEST'})
        } else {
          dispatch({type: 'UPDATE_CONTACT', response})
          history.push(`/contacts/${contact.id}`)
        }
      })
      .catch(console.log)
  }
}

export const deleteContact = (id, history) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch(`http://localhost:3001/contacts/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
        alert(response.errors)
      } else {
        history.push(`/contacts`)
        dispatch({type: 'DELETE_CONTACT', response})
      }
    })
    .catch(console.log)
  }
}

export const deleteNote = (note, history) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
    fetch(`http://localhost:3001/notes/${note.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
        alert(response.errors)
      } else {
        history.push(`/contacts/${note.contact_id}`)
        dispatch({type: 'DELETE_NOTE', response})
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return (dispatch) => {dispatch({type: 'LOGOUT'})}
}