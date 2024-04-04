// export const loginAction = () => ({
//   type: "ON_LOGGED_IN",
// });

// export const loginSuccess = () => ({
//   type: "LOGIN_SUCCESS",
// });


// ------------------------------------------------------------
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (isLoggedIn) => ({
  type: "LOGIN_SUCCESS",
  payload: isLoggedIn(true)
});

export const logout = (isLoggedIn) => ({
  type: "LOGOUT",
  payload: isLoggedIn(false)
});

