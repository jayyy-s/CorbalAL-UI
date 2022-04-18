import React from "react";
import "./css/songInfo.css";

function SongInfo(props) {
  

  return (
    <div class="SongInfo">
      <ul>
        <div className="song-name"><b>{props.songName}</b></div>
        <div className="detail"><b>Popularity: </b>{props.popularity}</div>
        <div className="detail"><b>Genre: </b>{props.genre}</div>
        <div className="detail"><b>Total Revenue: </b>{props.totalRevenue}</div>
        <div className="detail"><b>Total Listens: </b>{props.totalListens}</div>
      </ul>
    </div>
  );
}

export default SongInfo;
