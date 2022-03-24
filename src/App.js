import React from "react";
import Home from "./pages/home";
import * as ROUTES from "./constants/routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Browse from "./pages/browse";
import AuthListener from "./hooks/auth-listen";
export default function App() {
  const {user} = AuthListener();
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={user ? <Navigate to={ROUTES.BROWSE} /> : <Home />}
        />
        <Route
          path={ROUTES.SIGN_IN}
          element={user ? <Navigate to={ROUTES.BROWSE} /> : <SignIn />}
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={user ? <Navigate to={ROUTES.BROWSE} /> : <SignUp />}
        />
        <Route
          path={ROUTES.BROWSE}
          element={user ? <Browse /> : <Navigate to={ROUTES.HOME} />}
        />
      </Routes>
    </Router>
  );
}
