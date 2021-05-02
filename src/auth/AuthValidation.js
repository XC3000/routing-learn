import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

export const AuthValidation = ({ children }) => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);

  // Before rendering pages, we need to make sure
  // that user was not previously logged in
  const [isGettingDataFromLS, setIsGettingDataFromLS] = useState(true);

  useEffect(() => {
    // Get "isUserLoggedIn" key from a local storage
    const isPreviouslyLoggedIn = localStorage.getItem("isUserLoggedIn");

    // if user was previously logged in
    // "isPreviouslyLoggedIn" will equal to "true"
    if (isPreviouslyLoggedIn) {
      setIsUserLoggedIn(true);

      // we need this flag for some timeout.
      // Without it - application will return <children>
      // and we don't want that.
      setIsGettingDataFromLS(false);
    } else {
      // if user wasn't previously logged in
      // "isPreviouslyLoggedIn" will equal to "null"
      setIsGettingDataFromLS(false);
    }
  }, [setIsUserLoggedIn]);

  // Show a nice "Loader" when getting data from localStorage
  if (isGettingDataFromLS) {
    return (
      <div>
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        <h2>Getting data from LS</h2>
      </div>
    );
  }

  // If user was previously logged-in - render application
  if (isUserLoggedIn) {
    return <>{children}</>;
  } else {
    return <Redirect to="/login" />;
  }
};
