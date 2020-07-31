import React from "react";
import "./style.scss";

export const Description = ({ title, text }) => {
  return (
    <div className="description">
      <div className="description__title">{title}</div>
      <div className="description__text">{text}</div>
    </div>
  );
};
