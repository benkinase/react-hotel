import React from "react";

export default function Banner({ children, title, subtitle }) {
  // elements within the rendered components
  return (
    <div className="banner">
      <h2>{title}</h2>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
