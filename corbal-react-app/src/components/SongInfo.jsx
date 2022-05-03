import React, { useEffect } from "react";
import "./css/songInfo.css";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from '../components/css/SongInfo.module.css';

function SongInfo(props) {

  const [noOfTotalBids, setNoOfTotalBids] = useState(0);
  const [noOfPendingBids, setNoOfPendingBids] = useState(0);


  const offers = useSelector((state) => state.artistOffers.offers);

  useEffect(() => {
    setNoOfTotalBids(offers.filter((offer) => offer.song_id === props.track.id).length);
    setNoOfPendingBids(offers.filter((offer) => offer.song_id === props.track.id && offer.status === "Pending").length);
  }, [offers])

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }


  return (
    <div className={classes.songInfo}>
      <div className={classes.song_name}><b>{props.songName}</b></div>
      <div className={classes.detail}><b>Duration: </b>{millisToMinutesAndSeconds(props.track.duration_ms)}</div>
      <div className={classes.detail}><b>Total No Of Bids: </b>{noOfTotalBids}</div>
      <div className={classes.detail}><b> No Of Pending Bids: </b>{noOfTotalBids}</div>

    </div>
  );
}

export default SongInfo;
