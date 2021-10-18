import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users: usersReducer,
  contacts: contactsReducer,
  notes: notesReducer
});

export default rootReducer;

function usersReducer(state = [], action) {
  let idx;
  switch(action.type) {
    case 'ADD_USER':
      return [...state, action.user];
    case 'DELETE_USER':
      idx = state.findIndex(user => user.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
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