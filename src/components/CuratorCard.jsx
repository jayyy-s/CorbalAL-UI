import React from "react";
import "./css/userCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CuratorCard(props) {
  return (
    <div className="UserCard ml-align">
      <div className="profile-container">
        <div className="pfp-container">
          <img src={props.src} alt="where did ur prof pic go xD" />
        </div>
        <div className="content-container">
          <div className="username">
            <b>{props.username}</b>
          </div>
          <div className="real-name-age">
            {props.realName} ({props.age})
          </div>
          <div className="user-detail">{props.genre}</div>
          <div className="user-detail">
            {props.location} | {props.email} | {props.phone}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuratorCard;
