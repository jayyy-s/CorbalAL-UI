import classes from './css/ArtistFeedTrackCard.module.css';

function ArtistFeedTrackCard(props) {

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const handlePlayOnClick=()=>{
        window.open(props.track.preview_url)
    }

    return (<div className={classes.card}>
        <div className={classes.cardImage}>
            <img className={classes.image} src={props.imageUrl} />
            <button className={classes.playButton} onClick={handlePlayOnClick}>
                <i className={`bi bi-play-btn `}></i>
            </button>
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