import React from "react";
import propTypes from 'prop-types';
import "./style.scss";

const COLORS = ['primary', 'seccess', 'warning', 'danger']

export const Card = ({ children, color, outline}) => {
  return <div className={`card card_${color} card_outline-${outline}`}>{children}</div>;
};

Card.Title = ({ children }) => {
  return <div className="card__title">{children}</div>;
};

Card.Body = ({ children }) => {
  return <div className="card__body">{children}</div>;
};

Card.propTypes = {
  color: propTypes.oneOf(COLORS),
  outline: propTypes.oneOf(COLORS)
}