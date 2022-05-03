import classes from './css/CuratorFeedBidCard.module.css';
import { useEffect, useState } from 'react';
import { spotifyToken } from '../utilities/constants';



function CuratorFeedBidCard(props) {

    const [track, setTrack] = useState(null);

    //fetching the track from the db based on the song id
    useEffect(() => {
        if (props.data) {

            const getTrack = async () => {
                const getTrackFromSpotify = async () => {
                    const response = await fetch(
                        `https://api.spotify.com/v1/tracks/${props.data.song_id}`, {
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

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const handlePlayOnClick=()=>{
        window.open(track.preview_url)
    }

    const handleOnClick = (event) =>{
        props.onClick(props.data);
    }

    return (
        <>
            {track &&
                <div className={classes.card} onClick={props.data.status === "Pending" ?  handleOnClick :  null}>
                    <div className={classes.price}>
                        {`$ ${props.data.price}`}
                    </div>
                    <div className={classes.cardImage}>

                        <img className={classes.image} src={track.album.images[0].url} />
                        <button className={classes.playButton} onClick={handlePlayOnClick}>
                            <i className={`bi bi-play-btn `}></i>
                        </button>
                    </div>
                    <div className={classes.duration}>
                        {millisToMinutesAndSeconds(track.duration_ms)}
                    </div>
                    <div className={classes.trackName}>
                        {track.name}
                    </div>
                    <div className={classes.offerDetails}>
                        {`Position ${props.data.playlist_spot}| Tracks ${props.data.no_of_tracks_playlist}| Followers ${props.data.no_of_followers}`}
                    </div>
                </div>
            }
        </>
    )
}

export default CuratorFeedBidCard;