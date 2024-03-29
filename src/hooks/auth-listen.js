import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase-context";

export default function AuthListener() {
  const { firebase } = useContext(FirebaseContext);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
