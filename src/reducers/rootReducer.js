function rootReducer(state = {
  user: {
    username: '',
    password: '',
    contacts: []
  },
  loading: false
}, action) {
  // let idx;
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
    case 'LOGIN':
      return {
        user: action.response,
        loading: false
      }
    case 'LOGOUT':
      return {
        user: {},
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