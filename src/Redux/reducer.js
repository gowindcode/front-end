// reducer.js
const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
