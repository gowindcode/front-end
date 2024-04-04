// import { loginAction } from "../Redux/actions";
// import { useDispatch } from "react-redux";

// export const useLogin = () => {
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     dispatch(loginAction(false));
//   };

//   return handleLogin;
// };

// ----------------------------------------------------------------------------------

// loginActions.js
// import { useDispatch } from "react-redux";

// export const useLogin = () => {
//   const dispatch = useDispatch();

//   const loginSuccess = (isLoggedIn) => ({
//     type: "LOGIN_SUCCESS",
//     payload: isLoggedIn
//   });

//   const handleLogin = () => {
//     dispatch(loginSuccess(false));
//   };

//   return handleLogin;
// };

// -----------------------------------------------------------------------------------

import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "./actions";

export const useLogin = () => {
  const dispatch = useDispatch();

  const handleLogin = (isLoggedIn) => {
    dispatch(loginSuccess(isLoggedIn));
  };

  const handleLogout = (isLoggedIn) => {
    dispatch(logout(!isLoggedIn));
  };

  return { handleLogin, handleLogout };
};



