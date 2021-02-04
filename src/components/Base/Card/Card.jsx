import React from "react";

export default function Card({ height, width, children }) {
  const cardStyle = {
    height: height || "auto",
    width: width || "100%",
  };
  return (
    <div style={cardStyle} className="rounded-lg shadow-md">
      {children}
    </div>
  );
}
