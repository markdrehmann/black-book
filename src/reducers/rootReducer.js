function rootReducer(state = {
  user: {},
  loading: false
}, action) {
  let idx;
  switch(action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
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
        ...state,
        user: {
          ...state.user, contacts: [...state.user.contacts, action.response]},
        loading: false
      }
    case 'DELETE_CONTACT':
      return state // placeholder -- idx gets involved...maybe
    case 'UPDATE_CONTACT':
      return state // placeholder -- idx gets involved...maybe
    case 'ADD_NOTE':
      return state // placeholder
    case 'DELETE_NOTE':
      return state // placeholder -- idx gets involved...maybe
    default:
      return state;
  }
}

export default rootReducer;