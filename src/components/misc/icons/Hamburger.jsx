import React from "react";

export function HamburgerIcon({ size }) {
  const iconStyle = {
    width: size,
    height: size,
  };
  return (
    <svg
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
