import React from "react";

export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4>
        <strong className="text-blue">{title}</strong>
      </h4>
    </div>
  );
}
