import React from "react";
import "./RightCol.css";
import Meeting from "./meeting";
import Activity from "./Activity";
export default function RightCol() {
  return (
    <div className="right-container">
      <div className="user-container">
        <div className="user-info">
          <img
            className="user-profile"
            src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o="
            alt="user"
            height={"50px"}
            width={"50px"}
          />
          <div className="user-detail">
            <div>
              <b>Oilver Smith</b>
            </div>
            <p>vendor</p>
          </div>
        </div>
        <div className="user-arrow">ᐳ</div>
      </div>
      <div className="right-col-container">
        <div className="meeting-container">
          <b>
            <div>Upcoming Meeting</div>
            <div className="symbole">⋮ </div>
          </b>
          <hr></hr>
          <Meeting />
        </div>
        <div className="activity-container">
          <b>
            <div>Reacent Activity</div>
            <div className="symbole">⋮ </div>
          </b>
          <Activity />
          <Activity />
          <Activity />
          <Activity />
        </div>
      </div>
    </div>
  );
}
