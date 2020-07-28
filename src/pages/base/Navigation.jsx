import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__header">
        <span className="fullname">Dmitrii Panov</span>
        <span className="setting">*</span>
      </div>
      <div className="navigation__items">
        <ul>
          <li>
            <NavLink to="/ui" exact activeClassName="active">
              <span>Работа с UI</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/test1" activeClassName="active">
              <span>Карточки</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
