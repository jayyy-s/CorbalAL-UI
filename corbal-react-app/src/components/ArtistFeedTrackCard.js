import classes from './css/ArtistFeedTrackCard.module.css';

function ArtistFeedTrackCard(props) {

    return (<div className={classes.card}>
        <div className={classes.cardImage}>
            <img src={props.imageUrl} />
            <button className={classes.playButton}>
                <i className={`bi bi-play-btn `}></i>
            </button>
        </div>
        <div className={classes.duration}>
            {props.duration_ms}
        </div>
        <div>
            {props.trackName}
        </div>
    </div>
    )
} 

export default ArtistFeedTrackCard;