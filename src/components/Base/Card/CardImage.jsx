import React from "react";

export default function CardImage({ src }) {
  const imageStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={imageStyle} className="w-full h-96 md:h-full">
    </div>
  );
}
