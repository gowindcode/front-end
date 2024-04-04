// // reducer.js

// import { loginSuccess} from './actions';
// const initialState = {
//   isLoggedIn: false,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case "ON_LOGGED_IN":
//     case loginSuccess:
//       return {
//         ...state,
//         isLoggedIn: true,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         isLoggedIn: false,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

// -------------------------------------------------

import { LOGIN_SUCCESS, LOGOUT } from './actions';

const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;

