import React from "react";
import "./css/songInfo.css";

function SongInfo(props) {
  

  return (
    <div class="SongInfo">
      <ul>
        <div className="song-name"><b>{props.songName}</b></div>
        <div className="detail"><b>Genre: </b>{props.genre}</div>
        <div className="detail"><b>Playlist Position: </b>{props.playlistPosition}</div>
        <div className="detail"><b>Time Featured: </b> {props.timeFeatured}</div>
      </ul>
    </div>
  );
}

export default SongInfo;
