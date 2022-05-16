import React, { useEffect } from "react";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from '../components/css/SongInfo.module.css';
import {millisToMinutesAndSeconds} from '../utilities/functions';

/**
 * A functional component which is used to render the card displaying information of the track.
 * @param {object} props 
 * @returns 
 */
function SongInfo(props) {

  const [noOfTotalBids, setNoOfTotalBids] = useState(0);
  const [noOfPendingBids, setNoOfPendingBids] = useState(0);


  const offers = useSelector((state) => state.artistOffers.offers);

  /**
   * This effect practically runs once when the card is rendered to set the total no of offers and no of pending offers
   * for the track.
   */
  useEffect(() => {
    setNoOfTotalBids(offers.filter((offer) => offer.song_id === props.track.id).length);
    setNoOfPendingBids(offers.filter((offer) => offer.song_id === props.track.id && offer.status === "Pending").length);
  }, [offers])


  return (
    <div className={classes.songInfo}>
      <div className={classes.song_name}><b>{props.track.name}</b></div>
      <div className={classes.detail}><b>Duration: </b>{millisToMinutesAndSeconds(props.track.duration_ms)}</div>
      <div className={classes.detail}><b>Total No Of Bids: </b>{noOfTotalBids}</div>
      <div className={classes.detail}><b> No Of Pending Bids: </b>{noOfPendingBids}</div>
    </div>
  );
}

export default SongInfo;
