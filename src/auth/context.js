import React, { Dispatch, SetStateAction } from "react";

/* interface AuthContextType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
} */

export const AuthContext = {
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => Dispatch(SetStateAction),
};
