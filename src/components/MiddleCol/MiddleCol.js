import React from "react";
import Search from "./Search";
import "./MiddleCol.css";
import Welcome from "./Welcome";
import Invoice from "../CurrentProjects/Invoice";
import CurrentProjects from "../CurrentProjects/CurrentProjects";
export default function MiddleCol() {
  return (
    <div className="middle-container">
      <Search />
      <Welcome />
      <CurrentProjects />
      <Invoice />
    </div>
  );
}
