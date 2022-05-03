import {useState} from "react";
import "./css/userCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PitchModal from "./PitchModal";


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
          <p className="pitch-title">Pitch a Song</p>
          <div className="pitch-button-container">
            <button
              className="pitch-button-container"
              onClick={props.handleOpenPitchModal}>
              <p>+</p>
            </button>
            {/* {openPitchModal &&
              <PitchModal
                closePitchModal={setOpenPitchModal}
                src={props.src} />} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
