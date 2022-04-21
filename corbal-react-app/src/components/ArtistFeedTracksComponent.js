import classes from './css/ArtistFeedTracksComponent.module.css';
import TrackCard from './ArtistFeedTrackCard';

function ArtistFeedTracksComponent(props){
    
    const trackCards = props.tracks.map((track) => { return(
        <TrackCard imageUrl={track.album.images[0].url} trackName={track.name} preview_url={track.preview_url} duration_ms={track.duration_ms} />
    )
    })  

    return(
        <div className={classes.container}>
            {trackCards}
        </div>
    )
}

export default ArtistFeedTracksComponent;