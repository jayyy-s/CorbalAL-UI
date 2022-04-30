import classes from './css/CuratorFeedPitchCard.module.css';
import { useEffect, useState } from 'react';
import { spotifyToken } from '../utilities/constants';


function CuratorFeedPitchCard(props) {

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

    const handleCreateBidOnClick =()=>{
        props.onClick(props.data, track);
    }

    return (<>
        {track &&

            (<div className={classes.card}>
                <div className={classes.cardImage}>

                    <img className={classes.image} src={track.album.images[0].url} />
                    <button className={classes.playButton}>
                        <i className={`bi bi-play-btn `}></i>
                    </button>
                </div>
                <div className={classes.duration}>
                    {millisToMinutesAndSeconds(track.duration_ms)}
                </div>
                <div className={classes.trackName}>
                    {track.name}
                </div>
                <div className={classes.btn_create_wrapper}>
                    <button className={classes.btn_create} onClick={handleCreateBidOnClick}>Create Bid</button>
                </div>
            </div>
            )
        }
    </>
    )

}

export default CuratorFeedPitchCard;