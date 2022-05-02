import classes from './css/CreateBidFormComponent.module.css';
import { useSelector ,useDispatch } from 'react-redux';
import {postCuratorBid} from '../store/curator-bids-slice';
import { GENRES } from '../utilities/constants';



function CreateBidFormComponent(props) {

    const user = useSelector((state)=> state.user.user);
    const playlists = useSelector((state) => state.curatorPlaylists.playlists)


    const dispatch = useDispatch();

    const handleBidFormSubmit=async (event)=>{
        event.preventDefault();
        
        const today = new Date().toISOString();
        const date= today.split('T')[0];
        const time= today.split('T')[1].slice(0,8);


        const bid ={
            curator_id: user.id,
            artist_id: props.selectedPitch.artist_id,
            song_id: props.selectedPitch.song_id,
            playlist_id: event.target.playlist_options.value,
            song_name: props.selectedPitch.song_name,
            no_of_tracks_playlist: event.target.playlist_total_slots.value,
            no_of_followers: 123,
            playlist_spot: event.target.playlist_slot.value,
            price: event.target.bid_price.value,
            days_featured : event.target.length_promotion.value,
            status: "Pending",
            created_at: `${date} ${time}`
        }

        dispatch(postCuratorBid(bid));

        props.closeBidForm();
    }


    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const genreOptions = GENRES.map((genre) => {
        return (<option key={genre} value={genre}>{genre}</option>)
    })

    const playlistOptions = playlists.map((playlist) => {
        return (<option key={playlist.id} value={playlist.id} >{playlist.name}</option>)
    })

    return (
        <div className={classes.formContainer} style={{ flexGrow: 1 }}>
            <h3>Create a Bid</h3>
            <div className={classes.pitchDetailContainer}>
                <img className={classes.pitchImg} src={props.selectedTrack.album.images[0].url} />
                <div className={classes.pitchContent}>
                    <div className={classes.trackContent}>
                        <div>
                            {props.selectedTrack.name}
                        </div>
                        <div>
                            {millisToMinutesAndSeconds(props.selectedTrack.duration_ms)}
                        </div>
                    </div>
                    <div>
                        {props.selectedPitch.genre}
                    </div>
                </div>
            </div>

            <div className={classes.bidFormContainer}>
                <div className={classes.bidFormTitle}>Enter Bid Details</div>
                <form onSubmit={handleBidFormSubmit}>
                    <div className={classes.formRow}>
                        <div className={classes.formFieldSet} >
                            <label for="playlists">Select Playlist</label>
                            {/* <input type="text" list="playlistsOption" id="playlists" name="playlists" />
                                    <datalist id="playlistsOption">{playlistOptions}</datalist> */}
                            <select name="playlist_options" id="playlist_options">
                                {playlistOptions}
                            </select>

                        </div>
                    </div>
                    <div className={classes.formRow}>
                        <div className={classes.formFieldSet}>
                            <label for="bid_price">Bid Price</label>
                            <input type="number" step="0.01" id="bid_price" name="bid_price" placeholder="$USD" required />
                        </div>
                        <div className={classes.formFieldSet}>
                            <label for="playlist_genre">Genre Playlist</label>
                            <select name="playlist_genre" id="playlist_genre">
                                {genreOptions}
                            </select>
                        </div>
                    </div>
                    <div className={classes.formRow}>

                        <div className={classes.formFieldSet}>
                            <label>Placement On Playlist</label>
                            <div className={classes.playlistSpot}>
                                <input type="number" id="playlist_slot" name="playlist_slot" placeholder="Slot#" required min={1} />
                                <div className={classes.playlistSpotDiv}>out of</div>
                                <input type="number" id="playlist_total_slots" name="playlist_total_slots" placeholder="Total Number of Playlists" required min={1} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={classes.formFieldSet}>
                            <label for="length_promotion">Length of Promotion</label>
                            <input type="number" id="length_promotion" name="length_promotion" placeholder="Length of Promotion" required min={1} />
                        </div>
                    </div>
                    <div className={classes.form_btn_grp}>
                        <button type="button">Cancel</button>
                        <button className={classes.btn_submit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateBidFormComponent;