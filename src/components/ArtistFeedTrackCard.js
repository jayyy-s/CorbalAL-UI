import classes from './css/ArtistFeedTrackCard.module.css';
import { millisToMinutesAndSeconds } from '../utilities/functions';

/**
 * A functional component to render a Card for displaying information of a track
 * @param {object} props 
 * @returns 
 */
function ArtistFeedTrackCard(props) {


    const handlePlayOnClick = () => {
        window.open(props.track.preview_url)
    }

    return (<div className={classes.card}>
        <div className={classes.cardImage}>
            <img className={classes.image} src={props.imageUrl} />

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
            {millisToMinutesAndSeconds(props.track.duration_ms)}
        </div>
        <div className={classes.trackName}>
            {props.trackName}
        </div>
    </div>
    )
}

export default ArtistFeedTrackCard;