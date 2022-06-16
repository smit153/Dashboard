import MaterialIconsReact from "material-icons-react";
import React from "react";
export default function Live() {
  return (
    <div className="live-card">
      <div>
        <button className="card-button">
          <MaterialIconsReact icon="wifi_tethering" />
          <span className="button-title">live projects</span>
        </button>
      </div>
      <div>
        <button className="right-btn">
          <span className="button-title">View all</span>
        </button>
      </div>
      <div className="details">
        <h1>56</h1>
        <div>currenlty, the projects in progress</div>
      </div>
    </div>
  );
}
