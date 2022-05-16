import classes from './css/CuratorFeedBidCard.module.css';
import { useEffect, useState } from 'react';
import { spotifyToken } from '../utilities/constants';
import { millisToMinutesAndSeconds } from '../utilities/functions';



/**
 * A functional component to render a card displaying the information about a bid
 * @param {object} props 
 * @returns 
 */
function CuratorFeedBidCard(props) {

    const [track, setTrack] = useState(null);

    /**
     * This effect is used to fetch the track from spotify
     */
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


    const handlePlayOnClick = () => {
        window.open(track.preview_url)
    }

    const handleOnClick = (event) => {
        props.onClick(props.data);
    }

    return (
        <>
            {track &&
                <div className={classes.card} onClick={props.data.status === "Pending" ? handleOnClick : null}>
                    <div className={classes.price}>
                        {`$ ${props.data.price}`}
                    </div>
                    <div className={classes.cardImage}>

                        <img className={classes.image} src={track.album.images[0].url} />
                        <svg className={classes.playButton} onClick={handlePlayOnClick} width="25" height="25" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 121.15V0L121.95 60.58L0 121.15Z" fill="#EDECF4" />
                            <path d="M0 0L27.65 107.42L0 121.15V0Z" fill="url(#paint0_linear_1653_146)" />
                            <defs>
                                <linearGradient id="paint0_linear_1653_146" x1="-0.0049" y1="60.5782" x2="27.6502" y2="60.5782" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.1229" stop-color="#DA4D26" />
                                    <stop offset="0.5114" stop-color="#E66525" />
                                    <stop offset="0.9442" stop-color="#F47B21" />
                                </linearGradient>
                            </defs>
                        </svg>
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