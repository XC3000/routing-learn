import React, { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { AuthContext } from "./context";
import { AuthValidation } from "./AuthValidation";
import { LoginPage } from "../pages/LoginPage";

export const AuthHandler = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [pathname, setPathname] = useState("");
  const location = useLocation();

  /**
   * When application is staring, we need to save
   * path of that page, that user wanted to open
   * at the first place
   */
  useEffect(() => {
    if (!pathname) {
      setPathname(location.pathname);
    }
  }, [location.pathname, pathname]);

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
      }}
    >
      <AuthValidation>{children}</AuthValidation>
      {/* Login page should not be in a Switch. We don't
            to show nav-bar to user, that is not logged in*/}
      <Route
        path="/login"
        render={() => {
          return <LoginPage pathname={pathname} />;
        }}
      />
    </AuthContext.Provider>
  );
};
