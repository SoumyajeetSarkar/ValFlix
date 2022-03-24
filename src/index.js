import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./FIREBASE/firebase";
import { FirebaseContext } from "./context/firebase-context";

ReactDOM.render(
  <FirebaseContext.Provider value={firebase}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
