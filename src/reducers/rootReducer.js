// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   users: usersReducer,
//   contacts: contactsReducer,
//   notes: notesReducer
// });

function rootReducer(state = {
  users: [],
  loggedIn: false,
  currentUserId: null,
  loading: false
}, action) {
  switch(action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN':
      return { ...state,
        loggedIn: true,
        currentUserId: action.id,
        loading: false
      }
    case 'LOGOUT':
      return { ...state,
        loggedIn: false,
        currentUserId: null,
        loading: false
      }
    case 'ADD_USERS':
      console.log("in action add_users", action)
      return {
        ...state,
        users: action.users,
        loading: false
      }
    default:
      return state;
  }
}

export default rootReducer;

// probably not using anything below here

// function usersReducer(state = {users: [], loggedIn: false, currentUserId: null, loading: false}, action) {
//   let idx;
//   switch(action.type) {
//     case 'LOADING_USER':
//       return {
//         ...state,
//         users: [...state.users],
//         loading: true
//       }
//     case 'GET_USER':
//       return {
//         ...state, users: [action.users]
//         // ...state,
//         // users: [...state.users, action.users.users],
//         // loggedIn: true,
//         // currentUserId: action.id,
//         // loading: false
//       }
//     case 'ADD_USER':
//       return {
//         users: [...state, action.user],
//         loggedIn: true,
//         currentUserId: action.user.id,
//         loading: false
//       };
//     // case 'DELETE_USER':  // THIS CASE MAY NOT BE TOTALLY NECESSARY
//     //   idx = state.users.findIndex(user => user.id === action.id);
//     //   return [...state.slice(0, idx), ...state.slice(idx + 1)];
//     case 'LOG_IN':
//       idx = state.users.findIndex(user => user.username === action.username && user.password === action.password)
//       return {
//         ...state,
//         loggedIn: true,
//         currentUserId: state.users[idx],
//         loading: false
//       }
//     case 'LOG_OUT':
//       return {
//         ...state,
//         loggedIn: false,
//         currentUserId: null,
//         loading: false
//       }
//     default:
//       return state;
//   }
// }

// function contactsReducer(state = [], action) {
//   let idx;
//   switch(action.type) {
//     case 'LOADING_CONTACTS':
//       return state;
//     case 'ADD_CONTACT':
//       return [...state, action.contact];
//     case 'DELETE_CONTACT':
//       idx = state.findIndex(contact => contact.id === action.id)
//       return [...state.slice(0, idx), ...state.slice(idx + 1)];
//     case 'UPDATE_CONTACT':
//       idx = state.findIndex(contact => contact.id === action.id)
//       return state;
//     default:
//       return state;
//   };
// };

// function notesReducer(state = [], action) {
//   let idx;
//   switch(action.type) {
//     case 'LOADING_NOTES':
//       return state;
//     case 'ADD_NOTE':
//       return [...state, action.note]
//     case 'DELETE_NOTE':
//       idx = state.findIndex(note => note.id === action.id)
//       return [...state.slice(0, idx), ...state.slice(idx + 1)];
//     default:
//       return state;
//   }
// }