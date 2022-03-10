import React from "react";
import "./css/userCard.css";

function UserCard(props) {
  

  return (
    <div class="UserCard">
      <div className="pfp-container">
        <img src={props.src} alt='where did ur prof pic go xD' />
      </div>
    </div>
  );
}

export default UserCard;
