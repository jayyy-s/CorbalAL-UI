import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import SideBar from "../SideBar";
import BidInfo from "../BidInfo";
import SongInfo from "../SongInfo";
import UserCard from "../UserCard";
import YourBids from "../YourBids";
import YourMusic from "../YourMusic";
import fetchSongs from "../../data/spotify_data";
import * as LoginActions from "../../actions/user_login";
import {
  useSelector,
  useDispatch
} from 'react-redux';

import { fetchArtistOffers } from '../../store/artist-offers-slice';
import { fetchArtistTracks } from '../../store/artist-tracks-slice';
import classes from '../../components/css/Artist_page.module.css';
import PitchModalComponent from '../PitchModalComponent';

// import "../css/Artist_page.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

function ArtistPage(props) {

  const user = useSelector((state) => state.user.user);
  const offers = useSelector((state) => state.artistOffers.offers);
  const tracks = useSelector((state) => state.artistTracks.tracks);
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    //calling the offers and tracks endpoint 
    dispatch(fetchArtistOffers(user.id));
    dispatch(fetchArtistTracks(user.spotify_artist_id))

  }, [user]);

  const handleOpenPitchModal = ()=>{
    setIsPitchOpen(true);
  }

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


  // think it would be good if .tracks wasn't used here
  const songs = fetchSongs().tracks;

  // const songBids = [...songs].map((song) => {
  //   const songBid = (
  //     <BidInfo
  //       key={`${song.uri}:${song.name}`}
  //       songName={song.name}
  //       genre={`${song.genres[0]}`}
  //       playlistPosition="1"
  //       timeFeatured="3 days"
  //     />
  //   );
  //   return songBid;
  // });

  const songBids = offers.map((bid) => {
    const songBid = (
      <BidInfo
        bid={bid}
      />
    );
    return songBid;
  });

  const yourMusic = tracks.map((track) => {
    return (<SongInfo
      songName={track.name}
      popularity={track.popularity}
      genre="GENRE??????"
      totalRevenue="$100"
      totalListens="65"
      track={track}
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
            <YourBids numCompleted="10" numPending="10" numUnread="10" />
            <div className={classes.ml_align}>
              <div className={classes.bid_divider}></div>
            </div>
            {<div className={`${classes.ml_align} ${classes.bids_container}`}>{
              //renders Song Bids
              songBids}</div>}
          </div>
          <div className={classes.music_section}>
            <YourMusic />
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    user: state.login.user,
  };
}

export default ArtistPage;
//export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
