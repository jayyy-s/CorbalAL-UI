import React, { useEffect } from "react";
import SideBar from "../CuratorSideBar";
import BidInfo from "../BidInfo";
import CuratorCard from "../CuratorCard"
import PlaylistInfo from "../PlaylistInfo";
import DashboardSectionTitle from "../DashboardSectionTitle";
import { useSelector, useDispatch} from 'react-redux';
import { fetchCuratorBids } from '../../store/curator-bids-slice';
import { fetchCuratorPlaylists } from '../../store/curator-playlists-slice';
import classes from '../../components/css/Curator_page.module.css'


/**
 * CuratorPage functional component which is rendered as the Curator Dashboard.
 * We display the bids the curator has made and the playlists they manage.
 * @param {object} props 
 * @returns 
 */
function CuratorPage(props) {

  const user = useSelector((state) => state.user.user);
  const bids = useSelector((state) => state.curatorBids.bids);
  const playlists = useSelector((state) => state.curatorPlaylists.playlists)
  const dispatch = useDispatch();


  /**
   * This effect functions to fetch the bids and playlists of the curator.
   */
  useEffect(() => {
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


  /**
   * Constructing the bidinfo card for each bid of the curator
   */
  const songBids = bids.map((bid) => {
    const songBid = (
      <BidInfo
        bid={bid}
        key={bid.id}
      />
    );
    return songBid;
  });

  /**
   * Constructing the playlistinfo card for each playlist of the curator
   */
  const yourPlaylists = playlists.map((playlist) => {
    return (<PlaylistInfo
      playlist={playlist}
      key={playlist.id}
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
            <DashboardSectionTitle title="Your Bids" link="/curator/my-bids" />
            <div className={classes.ml_align}>
              <div className={classes.bids_divider}></div>
            </div>
            {<div className={`${classes.ml_align} ${classes.bids_container}`}>{
              songBids}</div>}
          </div>
          <div className={classes.playlist_section}>
          <DashboardSectionTitle title="Your Playlists" link="/curator/music" />
            <div className={classes.ml_align}>
              <div className={classes.bids_divider}></div>
            </div>
            <div className={`${classes.ml_align} ${classes.playlist_container}`}>
              {yourPlaylists}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CuratorPage;
