import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users: usersReducer,
  contacts: contactsReducer,
  notes: notesReducer
});

export default rootReducer;

function usersReducer(state = {users: [], loggedIn: false, currentUserId: null}, action) {
  let idx;
  switch(action.type) {
    case 'ADD_USER':
      return {
        users: [...state, action.user],
        loggedIn: true,
        currentUserId: action.user.id
      };
    // case 'DELETE_USER':  // THIS CASE MAY NOT BE TOTALLY NECESSARY
    //   idx = state.users.findIndex(user => user.id === action.id);
    //   return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'LOG_IN':
      idx = state.users.findIndex(user => user.username === action.username && user.password === action.password)
      return {
        ...state,
        loggedIn: true,
        currentUserId: users[idx]
      }
    case 'LOG_OUT':
      return {
        ...state,
        loggedIn: false,
        currentUserId: null
      }
    default:
      return state;
  }
}

function contactsReducer(state = [], action) {
  let idx;
  switch(action.type) {
    case 'LOADING_CONTACTS':
      return state;
    case 'ADD_CONTACT':
      return [...state, action.contact];
    case 'DELETE_CONTACT':
      idx = state.findIndex(contact => contact.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'UPDATE_CONTACT':
      return state;
    default:
      return state;
  };
};

function notesReducer(state = [], action) {
  let idx;
  switch(action.type) {
    case 'LOADING_NOTES':
      return state;
    case 'ADD_NOTE':
      return [...state, action.note]
    case 'DELETE_NOTE':
      idx = state.findIndex(note => note.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    default:
      return state;
  }
}