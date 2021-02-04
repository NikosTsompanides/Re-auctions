import React from "react";
import { NavLink } from "react-router-dom";

export function NavbarItem({
  title,
  link,
  exact,
  icon,
  dark,
}) {
  return (
    <NavLink
      to={link}
      exact={exact}
      activeClassName={`${dark ? "text-white" : "text-gray-700"}`}
      className={`text-md ${
        dark
          ? "text-white hover:underline"
          : "text-gray-400 hover:text-gray-500"
      } font-semibold no-underline px-2 align-self-center`}
    >
      {title}
    </NavLink>
  );
}
