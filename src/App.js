import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import { Navigation } from "./Navigation";
import { AuthHandler } from "./auth/AuthHandler";


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const App = () => {
  return (
    <Router>
      <AuthHandler>
        <Navigation />
        <hr />
        <Routes />
      </AuthHandler>
    </Router>
  );
};

export default App;
