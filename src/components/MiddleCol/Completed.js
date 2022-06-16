import MaterialIconsReact from "material-icons-react";
import React from "react";
export default function Completed() {
  return (
    <div
      className="live-card"
      style={{ width: "30%", backgroundColor: "#AD65FF" }}
    >
      <div>
        <button className="card-button" style={{ backgroundColor: "#9640f7" }}>
          <MaterialIconsReact icon="assignment_turned_in" />
          <span className="button-title">completed </span>
        </button>
      </div>
      <div> </div>
      <div className="details">
        <h1>24</h1>
        <div>completed projects</div>
      </div>
    </div>
  );
}
