import React from "react";

const Badge = ({ type, content }) => {
  return <span class={`badge text-bg-${type}`}>{content}</span>;
};

export default Badge;
