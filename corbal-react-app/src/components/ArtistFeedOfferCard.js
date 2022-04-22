import classes from './css/ArtistFeedOfferCard.module.css';
import { useSelector } from 'react-redux';


function ArtistFeedOfferCard(props) {
   
    const track = useSelector((state) => {
        return state.artistTracks.tracks.filter(track => track.id===props.offer.song_id)[0]});

    return(
        <div className={classes.card}>
                        <div className={classes.price}>
                {`$ ${props.offer.price}`}
            </div>
        <div className={classes.cardImage}>

            <img className={classes.image} src={track.album.images[0].url} />
            <button className={classes.playButton}>
                <i className={`bi bi-play-btn `}></i>
            </button>
        </div>
        <div className={classes.duration}>
            {track.duration_ms}
        </div>
        <div className={classes.trackName}>
            {track.name}
        </div>
        <div className={classes.offerDetails}>
            {`Position ${props.offer.playlist_spot}| Tracks ${props.offer.no_of_tracks_playlist}| Followers ${props.offer.no_of_followers}`}
        </div>
    </div>
    )
}

export default ArtistFeedOfferCard;