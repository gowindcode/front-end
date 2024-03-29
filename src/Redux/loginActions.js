import { loginAction } from "../Redux/actions";
import { useDispatch } from "react-redux";

export const useLogin = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginAction(true));
  };

  return handleLogin;
};
