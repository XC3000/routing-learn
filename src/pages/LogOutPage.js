import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const LogOutPage = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);
  if (isUserLoggedIn) {
    return (
      <div>
        <button
          onClick={() => {
            localStorage.removeItem("isUserLoggedIn");
            setIsUserLoggedIn(false);
          }}
        >
          Log out
        </button>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
};
