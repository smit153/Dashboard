import React, { useState } from "react";
import Links from "./Links";
// import AddTaskIcon from "@mui/icons-material/AddTask";
export default function NavBar() {
  const [active, setActive] = useState("Dashbord");
  const data = [
    {
      icon: "dashboard",
      name: "Dashbord",
      notification: 0,
    },
    {
      icon: "description",
      name: "Project",
      notification: 0,
    },
    {
      icon: "event",

      name: "Calander",
      notification: 0,
    },
    {
      icon: "send",
      name: "Messages",
      notification: 5,
    },
    {
      icon: "notifications_active",
      name: "Notification",
      notification: 9,
    },
    {
      icon: "call",
      name: "Contacts",
      notification: 0,
    },
  ];

  console.log(active);
  return (
    <div className="navBar-conat">
      {data.map((data) => (
        <button
          className="button"
          key={data.name}
          onClick={() => setActive(data.name)}
        >
          <Links
            icon={data.icon}
            name={data.name}
            notification={data.notification}
            active={active}
          ></Links>
        </button>
      ))}

      <div style={{ paddingLeft: "6px" }}>
        <b>Promotions</b>
      </div>
      <button className="button" onClick={() => setActive("Promotions")}>
        <Links
          icon="assessment"
          name="Promotions"
          notification=""
          active={active}
        ></Links>
      </button>
    </div>
  );
}
