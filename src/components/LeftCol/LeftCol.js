import React from "react";
import "./LeftCol.css";
import NavBar from "../NavBar/Navbar";
function LeftCol() {
  return (
    <div className="left-container">
      <div className="logo-container">LOGO</div>
      <div className="navbar-conatiner">
        <NavBar />
      </div>
    </div>
  );
}
export default LeftCol;
