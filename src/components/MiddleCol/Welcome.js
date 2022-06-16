import React from "react";
import Live from "./Live";
import InProgress from "./InProgress";
import Completed from "./Completed";
export default function Welcome() {
  return (
    <div className="welcome-container">
      <h2>
        <b>Welcome back, Andrew!</b>
      </h2>
      <span>Have a quick look at progress bar</span>
      <div className="cards">
        <Live />
        <InProgress />
        <Completed />
      </div>
    </div>
  );
}
