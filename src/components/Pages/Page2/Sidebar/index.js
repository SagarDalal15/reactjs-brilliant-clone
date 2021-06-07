import React from "react";

import "./style.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div style={{ opacity: "0.5" }}>{"< "}back</div>
      <div style={{ padding: "15px", opacity: "0.7" }}>Logic</div>
    </div>
  );
}
