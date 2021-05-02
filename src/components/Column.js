import React from "react";

export const Column = ({ children, minWidth = 120 }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        minWidth: `${minWidth}px`,
      }}
    >
      {children}
    </div>
  );
};
