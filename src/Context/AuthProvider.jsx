import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utilities/firerBase.config";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const user = {
    currentUser,
    setCurrentUser,
    createUser,
  };
  console.log(currentUser);
  return <AuthContext value={user}>{children}</AuthContext>;
};

export default AuthProvider;
