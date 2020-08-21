import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import { useStore } from "./hooks/useStore";
import useAuthCheck from "./hooks/useAuthCheck";
import CenterColumn from "./elements/CenterColumn";

function App() {
  const { state } = useStore();
  const { user } = state;
  const { loading } = useAuthCheck();
  // console.log("user", user);
  if (loading && !user) {
    // for now this fixes the login form blinking into view
    // replace with a beautiful spinner
    return null;
  }
  return (
    <CenterColumn>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute
          path="/"
          exact
          component={Home}
          isAuthenticated={!!user}
        />
        <PrivateRoute
          path="/profile"
          component={Profile}
          isAuthenticated={!!user}
        />
      </Switch>
    </CenterColumn>
  );
}

export default App;
