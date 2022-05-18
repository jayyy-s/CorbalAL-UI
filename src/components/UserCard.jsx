import {useState} from "react";
import "./css/userCard.css";
import "bootstrap/dist/css/bootstrap.min.css";


function UserCard(props) {
  const [openPitchModal, setOpenPitchModal] = useState(false);

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
      <div className="pitch-wrapper">
        <div className="pitch-container">
          <button className="btn-pitch" onClick={props.handleOpenPitchModal}>Pitch a Song</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
