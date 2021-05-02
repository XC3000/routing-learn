import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const LoginPage = ({ pathname }) => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);

  if (isUserLoggedIn) {
    return <Redirect to={pathname} />;
  } else {
    return (
      <div>
        <button
          onClick={() => {
            localStorage.setItem("isUserLoggedIn", "true");
            setIsUserLoggedIn(true);
          }}
        >
          Login
        </button>
      </div>
    );
  }
};
