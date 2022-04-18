import React from "react";
import "./css/songInfo.css";

function PlaylistInfo(props) {
  

  return (
    <div class="SongInfo">
      <ul>
        <div className="song-name"><b>{props.playlistName}</b></div>
        <div className="detail"><b>Genre: </b>{props.genre}</div>
        <div className="detail"><b>No of Tracks: </b>{props.noOfTracks}</div>
        <div className="detail"><b>Monthly Revenue: </b>{props.monthlyRevenue}</div>
        <div className="detail"><b>Rank: </b>{props.rank}</div>
      </ul>
    </div>
  );
}

export default PlaylistInfo;
