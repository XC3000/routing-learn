import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

export const FirstPage = withRouter((props) => {
  console.log(props);
  return (
    <div>
      <h1>First Page</h1>
    </div>
  );
});
