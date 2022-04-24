import React from "react";

const Button = ({ action, children, variant }) => {
  return (
    <button type="button" className={variant} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
