import React from "react";
import MaterialIconsReact from "material-icons-react";
import "./CurrentProject.css";
import ProjectCard from "./ProjectCard";

export default function CurrentProjects() {
  return (
    <div>
      <div className="current-project-header">
        <div className="current-project-title">
          <div className="current-project">
            <b>Current Projects </b>
          </div>
          <div className="current-project-discription">
            Projects that are currently in progress
          </div>
        </div>
        <button className="filter-button">
          <div>Filter</div>
          <MaterialIconsReact icon="filter_alt" />
        </button>
        <div className="current-project-symbole">
          <button>⋮</button>
        </div>
      </div>
      <div className="current-project-body">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <div></div>
      </div>
    </div>
  );
}
