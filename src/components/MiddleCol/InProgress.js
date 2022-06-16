import MaterialIconsReact from "material-icons-react";
import React from "react";
export default function InProgress() {
  return (
    <div
      className="live-card"
      style={{ width: "30%", backgroundColor: "#7AD1FF" }}
    >
      <div>
        <button className="card-button" style={{ backgroundColor: "#3fb4f2" }}>
          <MaterialIconsReact icon="hourglass_top" />
          <span className="button-title">In Progress</span>
        </button>
      </div>
      <div> </div>
      <div className="details">
        <h1>124</h1>
        <div> projects in progress</div>
      </div>
    </div>
  );
}
