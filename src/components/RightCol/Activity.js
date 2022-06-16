import React from "react";
export default function Activity() {
  return (
    <div className="activity">
      <div className="bullet-point">●</div>
      <div className="activity-info">
        <div className="activity-title">
          <b>You received a message from Ashish</b>
        </div>
        <div className="activity-name">
          <b>Ashish Sharma</b>
        </div>
        <div className="activity-time">Jun 14, 2021 at 5:31 PM</div>
      </div>
      <div className="activity-user">
        <img
          className="activity-user-profile"
          src="https://static6.depositphotos.com/1000486/628/v/950/depositphotos_6284980-stock-illustration-silhouette-men-in-black-suit.jpg"
          alt="user"
        ></img>
      </div>
    </div>
  );
}
