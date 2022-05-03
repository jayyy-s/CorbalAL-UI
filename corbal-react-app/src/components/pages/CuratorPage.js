import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SideBar from "../CuratorSideBar";
import BidInfo from "../BidInfo";
import CuratorCard from "../CuratorCard"
import PlaylistInfo from "../PlaylistInfo";
import YourBids from "../CuratorYourBids";
import YourPlaylists from "../YourPlaylists";
import fetchSongs from "../../data/spotify_data";
import * as LoginActions from "../../actions/user_login";
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { fetchCuratorBids } from '../../store/curator-bids-slice';
import { fetchCuratorPlaylists } from '../../store/curator-playlists-slice';
import classes from '../../components/css/Curator_page.module.css'

import "../css/curator_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function CuratorPage(props) {

  const user = useSelector((state) => state.user.user);
  const bids = useSelector((state) => state.curatorBids.bids);
  const playlists = useSelector((state) => state.curatorPlaylists.playlists)
  const dispatch = useDispatch();


  useEffect(() => {
    //call the bids and playlists endpoint
    dispatch(fetchCuratorBids(user.id));
    dispatch(fetchCuratorPlaylists(user.spotify_user_id));
  }, [user]);

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



  const songBids = bids.map((bid) => {
    const songBid = (
      <BidInfo
        bid={bid}
      />
    );
    return songBid;
  });

  const yourPlaylists = playlists.map((playlist) => {
    return (<PlaylistInfo
      playlistName={playlist.name}
      genre="GENRE??????"
      totalRevenue="$2 (xD)"
      rank="5"
      noOfTracks={playlist.tracks.total}
      playlist={playlist}
    />)
  })

  return (
    <div className={classes.app_container}>
      <div className={classes.sideBar_container}>
        <SideBar />
      </div>
      <div className={classes.main_container}>
        <div >{
          //renders UserCard
          renderUserCard()}</div>
        <div className={classes.body_container}>
          <div className={classes.bid_section}>
            <YourBids numCompleted="10" numPending="10" numUnread="10" />
            <div className={classes.ml_align}>
              <div className={classes.bids_divider}></div>
            </div>
            {<div className={`${classes.ml_align} ${classes.bids_container}`}>{
              //renders Song Bids
              songBids}</div>}
          </div>
          <div className={classes.music_section}>
            <YourPlaylists />
            <div className={classes.ml_align}>
              <div className={classes.bids_divider}></div>
            </div>
            <div className={`${classes.ml_align} ${classes.music_container}`}>
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