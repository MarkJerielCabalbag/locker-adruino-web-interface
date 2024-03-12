import React from "react";

const Button = ({ type, onClick, content }) => {
  return (
    <button type="button" class={`btn-${type}`} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
