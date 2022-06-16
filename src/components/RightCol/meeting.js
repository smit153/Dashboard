import React from "react";
import "./RightCol.css";
import MeetingInfo from "./MeetingInfo";
export default function Meeting() {
  return (
    <div>
      <div className="meetings">
        <div>Today's Meeting</div>
        <span>˅</span>
      </div>
      <MeetingInfo />
      <MeetingInfo />
      <div className="meetings">
        <div>Schedule Meeting</div>
        <span>^</span>
      </div>
      <hr className="line"></hr>
    </div>
  );
}
