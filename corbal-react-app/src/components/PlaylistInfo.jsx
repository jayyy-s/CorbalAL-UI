import React from "react";
import "./css/songInfo.css";
import classes from '../components/css/PlaylistInfo.module.css'

function PlaylistInfo(props) {


  return (
    // <div class="SongInfo">
    //     <div className="song-name"><b>{props.playlistName}</b></div>
    //     <div className="detail"><b>Genre: </b>{props.genre}</div>
    //     <div className="detail"><b>No of Tracks: </b>{props.noOfTracks}</div>
    //     <div className="detail"><b>Monthly Revenue: </b>{props.monthlyRevenue}</div>
    //     <div className="detail"><b>Rank: </b>{props.rank}</div>
    // </div>
    <div className={classes.playlistInfo}>
      <div className={classes.playlist_name}><b>{props.playlist.name}</b></div>
      <div className={classes.detail}><b>No of Tracks: </b>{props.playlist.tracks.total}</div>
      <div className={classes.detail}><b>Link to Spotify: </b><a href={props.playlist.external_urls.spotify}></a></div>
    </div>
  );
}

export default PlaylistInfo;
