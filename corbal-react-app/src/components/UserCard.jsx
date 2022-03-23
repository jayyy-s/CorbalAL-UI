import React from "react";
import "./css/userCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

function UserCard(props) {
  return (
    <div class="UserCard ml-align">
      <div className="profile-container">
        <div className="pfp-container">
          <img src={props.src} alt="where did ur prof pic go xD" />
        </div>
        <div class="content-container">
          <div className="username">
            <b>{props.username}</b>
          </div>
          <div className="real-name-age">
            {props.realName} ({props.age})
          </div>
          <div class="user-detail">{props.genre}</div>
          <div class="user-detail">
            {props.location} | {props.email} | {props.phone}
          </div>
        </div>
      </div>
      <div className="pitch-wrapper">
        <div className="pitch-container">
          <p className="pitch-title">Pitch a Song</p>
          <div className="pitch-button-container">
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
