import React from "react";
import classes from '../components/css/PlaylistInfo.module.css'

/**
 * A functional component to render the card displaying the information of the playlist
 * @param {object} props 
 * @returns 
 */
function PlaylistInfo(props) {

  return (
    <div className={classes.playlistInfo}>
      <div className={classes.playlist_name}><b>{props.playlist.name}</b></div>
      <div className={classes.detail}><b>No of Tracks: </b>{props.playlist.tracks.total}</div>
      <div className={classes.detail}><b>Link to Spotify: </b><a href={props.playlist.external_urls.spotify} target="_blank">Open Playlist</a></div>
    </div>
  );
}

export default PlaylistInfo;
