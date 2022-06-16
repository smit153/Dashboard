import React from "react";
import MaterialIcon from "material-icons-react";
import "./Navbar.css";
export default function Links(props) {
  const length = props.notification > 0;
  const active = props.active;

  return (
    <div
      className="links"
      style={{
        color:
          active === props.name ? "rgb(20, 169, 249)" : "rgb(102, 102, 102)",
      }}
    >
      <div className="icon">
        <MaterialIcon icon={props.icon} />
      </div>
      <div className="name">{props.name}</div>

      <div
        className="notification"
        style={{
          backgroundColor: length > 0 ? "#14a9f9" : "rgb(239, 234, 234)",
        }}
      >
        {props.notification}
      </div>
    </div>
  );
}
