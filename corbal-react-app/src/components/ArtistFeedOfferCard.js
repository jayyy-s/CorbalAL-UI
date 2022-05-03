import classes from './css/ArtistFeedOfferCard.module.css';
import { useSelector } from 'react-redux';


function ArtistFeedOfferCard(props) {

    const track = useSelector((state) => {
        return state.artistTracks.tracks.filter(track => track.id === props.data.song_id)[0]
    });

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const handleOnClick = (event) =>{
        props.onClick(props.data);
    }

    const handlePlayOnClick=(event)=>{
        event.stopPropagation();
        window.open(track.preview_url)
    }

    return (
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
    )
}

export default ArtistFeedOfferCard;