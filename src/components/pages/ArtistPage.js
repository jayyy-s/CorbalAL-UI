import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import BidInfo from "../BidInfo";
import SongInfo from "../SongInfo";
import UserCard from "../UserCard";
import DashboardSectionTitle from "../DashboardSectionTitle";
import {useSelector,useDispatch} from 'react-redux';
import { fetchArtistOffers } from '../../store/artist-offers-slice';
import { fetchArtistTracks } from '../../store/artist-tracks-slice';
import classes from '../../components/css/Artist_page.module.css';
import PitchModalComponent from '../PitchModalComponent';

/**
 * The ArtistPage functional component is rendered as the Artist Dashboard when the first login.
 * @param {object} props 
 * @returns 
 */
function ArtistPage(props) {

  const user = useSelector((state) => state.user.user);
  const offers = useSelector((state) => state.artistOffers.offers);
  const tracks = useSelector((state) => state.artistTracks.tracks);
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const dispatch = useDispatch();

  /**
   * This effect is used to fetch the offers and the songs of the artist.
   */
  useEffect(() => {
    //calling the offers and tracks endpoint 
    dispatch(fetchArtistOffers(user.id));
    dispatch(fetchArtistTracks(user.spotify_artist_id))

  }, [user]);

  /**
   * A function to open pitch a song modal
   */
  const handleOpenPitchModal = ()=>{
    setIsPitchOpen(true);
  }

    /**
   * A function to close pitch a song modal
   */
  const handleClosePitchModal = ()=>{
    setIsPitchOpen(false);
  }

  /**
   * Pulls information from redux store to create userCard
   * @returns a userCard component
   */
  const renderUserCard = () => {
    return (
      <UserCard
        src={
          user.img ||
          "https://i.kym-cdn.com/photos/images/newsfeed/002/205/323/176.jpg"
        }
        username={user.username}
        realName={user.firstName + " " + user.lastName}
        age={user.age}
        genre={user.genre}
        location={user.city}
        email={user.email}
        phone={user.phone}
        handleOpenPitchModal={handleOpenPitchModal}
      />
    );
  };


  /**
   * Constructs the BidInfo cards for the offers available to the artist.
   */
  const songBids = offers.map((bid) => {
    const songBid = (
      <BidInfo
        bid={bid}
        key={bid.id}
      />
    );
    return songBid;
  });

  /**
   * Constructs the SongInfo cards for the tracks of the artist.
   */
  const yourMusic = tracks.map((track) => {
    return (<SongInfo
      track={track}
      key={track.id}
    />)
  })


  

  return (
    <div className={classes.app_container}>
      <div className={classes.sideBar_container}>
        <SideBar />
      </div>
      <div className={classes.main_container}>
        {isPitchOpen && (
          <PitchModalComponent
            handleClosePitchModal ={handleClosePitchModal}
          />
        )}
        <div>{
          //renders UserCard
          renderUserCard()}</div>
        <div className={classes.body_container}>
          <div className={classes.bid_section}>
            <DashboardSectionTitle title="Your Offers" link="/artist/offers" />
            <div className={classes.ml_align}>
              <div className={classes.bid_divider}></div>
            </div>
            {<div className={`${classes.ml_align} ${classes.bids_container}`}>{
              //renders Song Bids
              songBids}</div>}
          </div>
          <div className={classes.music_section}>
            <DashboardSectionTitle title="Your Music" link="/artist/tracks" />
            <div className={classes.ml_align}>
              <div className={classes.bid_divider}></div>
            </div>
            <div className={`${classes.ml_align} ${classes.music_container}`}>{
              yourMusic
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ArtistPage;
