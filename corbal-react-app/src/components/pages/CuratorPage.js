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
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {fetchCuratorBids} from '../../store/curator-bids-slice';
import {fetchCuratorPlaylists} from '../../store/curator-playlists-slice';

import "../css/curator_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function CuratorPage(props) {
  
  const user = useSelector((state)=> state.user.user);
  const bids = useSelector((state)=> state.curatorBids.bids);
  const playlists = useSelector((state)=> state.curatorPlaylists.playlists)
  const dispatch = useDispatch();

  useEffect(() => {
    //call the bids and playlists endpoint
    dispatch(fetchCuratorBids(user.id));
    dispatch(fetchCuratorPlaylists(user.id));
  },[user]);

  /**
   * Pulls information from redux store to create userCard
   * @returns a userCard component
   */
  const renderUserCard = () => {
    return (
      <CuratorCard
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
      />
    );
  };

  const renderBids = ()=>{

  }

  const renderMusic = () => {

  }


  // think it would be good if .tracks wasn't used here
  const songs = fetchSongs().tracks;
  const songBids = bids.map((bid) => {
    const songBid = (
      <BidInfo
        key={`${bid.song_id}:${bid.song_name}`}
        songName={bid.song_name}
        // genre={`${song.genres[0]}`}
        playlistPosition={bid.playlist_spot}
        timeFeatured={bid.days_featured}
      />
    );
    return songBid;
  });

  const yourPlaylists=playlists.map((playlist)=>{
    return (<PlaylistInfo
      playlistName={playlist.name}
      genre="GENRE??????"
      totalRevenue="$2 (xD)"
      rank="5"
      noOfTracks={playlist.tracks.total}
    />)
  })
  
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
              {yourPlaylists}
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

// function mapStateToProps(state) {
//   return {
//     user: state.login.user,
//   };
// }

export default CuratorPage;
// export default connect(mapStateToProps, mapDispatchToProps)(CuratorPage);
