import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SideBar from "../SideBar";
import BidInfo from "../BidInfo";
import SongInfo from "../SongInfo";
import UserCard from "../UserCard";
import YourBids from "../YourBids";
import YourMusic from "../YourMusic";
import fetchSongs from "../../data/spotify_data";
import * as LoginActions from "../../actions/user_login";

import "../css/Artist_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ArtistPage(props) {
  useEffect(() => {
    //call the api
    //   const response = loginAuthentication(email, password);
  });

  /**
   * Pulls information from redux store to create userCard
   * @returns a userCard component
   */
  const renderUserCard = () => {
    return (
      <UserCard
        src={
          props.user.img ||
          "https://i.kym-cdn.com/photos/images/newsfeed/002/205/323/176.jpg"
        }
        username={props.user.username}
        realName={props.user.firstName + " " + props.user.lastName}
        age={props.user.age}
        genre={props.user.genre}
        location={props.user.city}
        email={props.user.email}
        phone={props.user.phone}
      />
    );
  };

  const renderBids = ()=>{

  }

  const renderMusic = () => {

  }


  // think it would be good if .tracks wasn't used here
  const songs = fetchSongs().tracks;
  const songBids = [...songs].map((song) => {
    const songBid = (
      <BidInfo
        key={`${song.uri}:${song.name}`}
        songName={song.name}
        genre={`${song.genres[0]}`}
        playlistPosition="1"
        timeFeatured="3 days"
      />
    );
    return songBid;
  });

  console.log("I'm in artist: ", props);

  return (
    <div className="app-container">
      <div className="sideBar-container">
        <SideBar />
      </div>
      <div className="main-container">
        <div className="header-container">{
            //renders UserCard
            renderUserCard()}</div>
        <div className="body-container">
          <div className="bid-section">
            <YourBids numCompleted="10" numPending="10" numUnread="10" />
            <div class="ml-align">
              <div class="bids-divider"></div>
            </div>
            {<div className="ml-align">{
                //renders Song Bids
                songBids}</div>}
          </div>
          <div className="music-section">
            <YourMusic />
            <div className="ml-align">
              <div class="bids-divider"></div>
            </div>
            <div className="ml-align">
              <SongInfo
                songName="where heebo"
                genre="GENRE??????"
                totalRevenue="$100"
                totalListens="65"
              />
              <SongInfo
                songName="who heebo"
                genre="genre."
                totalRevenue="$200"
                totalListens="25"
              />
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

//export default LogIn;
export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
