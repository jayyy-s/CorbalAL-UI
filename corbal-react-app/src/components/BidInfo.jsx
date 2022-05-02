import "./css/bidInfo.css";
import classes from '../components/css/BidInfo.module.css';
import { useEffect, useState } from 'react';
import { spotifyToken } from '../utilities/constants';
import { ReactComponent as Card } from '../assets/BidInfo.svg';

function BidInfo(props) {

  const [track, setTrack] = useState(null);
  //fetching the track from the db based on the song id
  useEffect(() => {

    if (props.bid) {

      const getTrack = async () => {
        const getTrackFromSpotify = async () => {
          const response = await fetch(
            `https://api.spotify.com/v1/tracks/${props.bid.song_id}`, {
            headers: {
              "Authorization": `Bearer ${spotifyToken}`,
              "Accept": "application/json"
            }
          }
          );

          if (!response.ok) {
            console.error("There was an error when fetching a track in pitch card");
          }
          return await response.json();
        }

        try {
          const trackResp = await getTrackFromSpotify();
          setTrack(trackResp);
        } catch (err) {
          console.error("There was an error when fetching a track in pitch card");
        }
      }
      getTrack();
    }
  }, [])


  return (
    <>
      {track &&
        (<div className={classes.bidInfoCard}>
          <img className={classes.bidInfoImg} src={track.album.images[0].url} />
          <div className={classes.bidInfoSection}>
            <div className={classes.trackName}>{track.name}</div>
            <div className={classes.bidContent}>
              <div className={classes.bidSection}>
                <div>
                  {props.bid.genre}
                </div>
                <div>
                  GENRE
                </div>
              </div>
              <div>
                <div>
                  {props.bid.playlist_spot}/{props.bid.no_of_tracks_playlist}
                </div>
                <div>
                  PLAYLIST POSITION
                </div>
              </div>
              <div>
                <div>
                  {props.bid.days_featured}
                </div>
                <div>
                  TIME FEATURED
                </div>
              </div>
            </div>

          </div>
          <div className={classes.bidPrice}>
           <div className={classes.price}>{`$${props.bid.price}`} </div> 
          </div>
        </div>
        )
      }
    </>

  );
}

export default BidInfo;
