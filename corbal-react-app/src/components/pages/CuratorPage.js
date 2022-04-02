import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SideBar from "../SideBar";
import BidInfo from "../BidInfo";
import CuratorCard from "../CuratorCard"
import PlaylistInfo from "../PlaylistInfo";
import YourBids from "../YourBids";
import YourPlaylists from "../YourPlaylists";
import fetchSongs from "../../data/spotify_data";
import * as LoginActions from "../../actions/user_login";

import "../css/curator_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function CuratorPage(props) {
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
      <CuratorCard
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
        // genre='test'
        playlistPosition="1"
        timeFeatured="3 days"
      />
    );
    return songBid;
  });
  
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
            <YourPlaylists />
            <div className="ml-align">
              <div class="bids-divider"></div>
            </div>
            <div className="ml-align">
              <PlaylistInfo
                playlistName="O____________O"
                genre="GENRE??????"
                totalRevenue="$2 (xD)"
                rank="5"
              />
              <PlaylistInfo
                songName=":OOOOOOOO"
                genre="genre."
                totalRevenue="nunya"
                rank="nunya"
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
export default connect(mapStateToProps, mapDispatchToProps)(CuratorPage);
