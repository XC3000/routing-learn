import { NavLink } from "react-router-dom";
import React from "react";

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" activeStyle={{ color: "green" }} exact={true}>
          First page
        </NavLink>
      </li>
      <li>
        <NavLink to="/second" activeStyle={{ color: "green" }} exact={true}>
          Second Page
        </NavLink>
      </li>
      <li>
        <NavLink to="/third" activeStyle={{ color: "green" }}>
          Third page
        </NavLink>
      </li>
      <li>
        <NavLink to="/items" activeStyle={{ color: "green" }}>
          Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout" activeStyle={{ color: "green" }} exact={true}>
          Logout page
        </NavLink>
      </li>
    </ul>
  </nav>
);
