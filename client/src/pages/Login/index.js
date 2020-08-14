import React from "react";
import { Redirect, Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useFetch from "use-http";
import { useStore } from "../../hooks/useStore";
import { login } from "../../actions";
import Wrapper from './elements/Wrapper';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Login() {
  const { state, dispatch } = useStore();
  const { user } = state;
  console.log("user in login", user);
  const { post, response } = useFetch(`${API_BASE_URL}`, {
    credentials: "include",
  });
  const submit = async (username, password) => {
    const loggedInUser = await post("/login", { username, password });
    if (response.ok && loggedInUser) {
      console.log("login success", response);
      return dispatch(login(loggedInUser));
    }
    console.log("login failed");
    return dispatch(login(null));
  };

  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <Wrapper>
      <LoginForm submit={submit} />
      <Link to="/register">Register</Link>
    </Wrapper>
  );
}

export default Login;
