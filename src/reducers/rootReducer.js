// I could make a case called 'SUCCESSFUL_REQUEST' and have it replace a bunch of these...
// Although, it's probably better / more scalable to return ONLY what I need from each server request and insert it into state, rather than return the full user each time.

function rootReducer(state = {
  user: {
    username: '',
    password: '',
    contacts: []
  },
  loading: false
}, action) {
  switch(action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'FAILED_REQUEST':
      return {
        ...state,
        loading: false
      }
    case 'LOGOUT':
      return {
        user: {
          username: '',
          password: '',
          contacts: []
        },
        loading: false
      }
    case 'LOGIN':
      return {
        user: action.response,
        loading: false
      }
    case 'ADD_CONTACT':
      return {
        user: action.response,
        loading: false
      }
    case 'DELETE_CONTACT':
      return {
        user: action.response,
        loading: false
      }
    case 'UPDATE_CONTACT':
      return {
        user: action.response,
        loading: false
      }
    case 'ADD_NOTE':
      return {
        user: action.response,
        loading: false
      }
    case 'DELETE_NOTE':
      return {
        user: action.response,
        loading: false
      }
    default:
      return state;
  }
}

export default rootReducer;