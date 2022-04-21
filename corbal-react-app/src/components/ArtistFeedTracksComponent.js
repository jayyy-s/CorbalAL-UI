import classes from './css/ArtistFeedTracksComponent.module.css';
import TrackCard from './ArtistFeedTrackCard';

function ArtistFeedTracksComponent(props){
    
    const trackCards = props.tracks.map((track) => { return(
        <TrackCard />
    )
    })  

    return(
        <div className={classes.container}>
            {trackCards}
        </div>
    )
}

export default ArtistFeedTracksComponent;