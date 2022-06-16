import React from "react";
import "./RightCol.css";
export default function MeetingInfo() {
  return (
    <div className="meeting-info-conatiner">
      <div className="meeting-info-header">
        <div>30 min call with client</div>
        <div className="symbole">⋮ </div>
      </div>
      <div className="meeting-info-title">
        <b>project discovery call</b>
      </div>
      <div className="meeting-info-time">
        <div> due soon </div>
        <b>09:20 AM</b>
      </div>
      <div className="meeting-info-members">
        <div className="meeting-members">
          <img
            className="meeting-member-profile"
            src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
            alt="user"
          />
          <img
            className="meeting-member-profile"
            src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
            alt="user"
          />
          <img
            className="meeting-member-profile"
            src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
            alt="user"
          />
          <div className="meeting-member-number">6+</div>
        </div>
        <button className="meeting-members-button">+ &emsp; Invite</button>
      </div>
    </div>
  );
}
