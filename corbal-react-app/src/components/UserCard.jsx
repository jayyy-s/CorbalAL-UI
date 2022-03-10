import React from "react";
import "./css/userCard.css";

function UserCard(props) {

  return (
    <div class="UserCard">
      <div class="row">
        <div class="col-md-1">
          <div className="pfp-container">
            <img src={props.src} alt='where did ur prof pic go xD' />
          </div>
        </div>
        <div class="col-md-6">
          <div className="username">
            <b>{props.username}</b>
          </div>
          <div className="real-name-age">
            {props.realName} ({props.age})
          </div>
          <div class="user-detail">
            {props.genre}
          </div>
          <div class="user-detail">
            {props.location} | {props.email} | {props.phone}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
