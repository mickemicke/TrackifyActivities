import React from "react";
import useLoginForm from "../../hooks/useFormInput";
import FormWrapper from "./FormWrapper";

function LoginForm({ submit }) {
  const [{ username }, setUsername] = useLoginForm({ username: "" });
  const [{ password }, setPassword] = useLoginForm({ password: "" });

  return (
    <FormWrapper
      onSubmit={(event) => {
        event.preventDefault();
        submit(username, password);
      }}
      method="post"
    >
    <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        onChange={setUsername}
        value={username}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={setPassword}
        value={password}
      />
      <input type="submit" value="Submit" />
    </FormWrapper>
  );
}

export default LoginForm;
