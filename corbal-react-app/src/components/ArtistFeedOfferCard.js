import classes from './css/ArtistFeedOfferCard.module.css';
import { useSelector } from 'react-redux';


function ArtistFeedOfferCard(props) {
   
    const track = useSelector((state) => {
        return state.artistTracks.tracks.filter(track => track.id===props.song_id)[0]});

    return(
        <div className={classes.card}>
        <div className={classes.cardImage}>
            <img src={track.album.images[0].url} />
            <button className={classes.playButton}>
                <i className={`bi bi-play-btn `}></i>
            </button>
        </div>
        <div className={classes.duration}>
            {track.duration_ms}
        </div>
        <div>
            {track.name}
        </div>
    </div>
    )
}

export default ArtistFeedOfferCard;