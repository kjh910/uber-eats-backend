import React from "react";
import { isLoggedInVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../constants";

export const LoggedInRouter = () => {
  const logout = () => {
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
    isLoggedInVar(false);
  }
  return (
    <div>
      <h1>Logged In</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  )
};