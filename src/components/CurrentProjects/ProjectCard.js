import React from "react";
import MaterialIconsReact from "material-icons-react";
import "./ProjectCard.css";
export default function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-name">
        <b>Construction Project</b>
      </div>
      <div className="project-desciption">Property name </div>
      <div className="project-details">
        <div className="project-cost">$ 100 - 800 </div>
        <div className="project-due">
          <MaterialIconsReact icon="today" />
          <div className="project-deadline">Deadline - 25 may</div>
        </div>
      </div>
      <div className="project-progress">
        <progress id="file" value="75" max="100"></progress>
        <div className="progress-value">
          <div>Progress Bar</div>
          <div>75 %</div>
        </div>
      </div>
      <div className="project-client">
        <div className="client-data">
          <img
            src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            alt="client"
          />
          <div>Vender’s name</div>
        </div>
        <button className="view-client">view</button>
      </div>
    </div>
  );
}
