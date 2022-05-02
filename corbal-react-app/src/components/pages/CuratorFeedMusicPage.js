import classes from '../css/CuratorFeedMusicPage.module.css';
import CuratorFeedTopNavBar from '../CuratorFeedTopNavBar';
import SideBar from '../CuratorSideBar';
import SearchBar from '../SearchBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MusicComponent from '../CuratorFeedMusicComponent';
import { fetchPitches } from '../../store/all-pitches-slice';
import { GENRES } from '../../utilities/constants';



function CuratorFeedMusicPage(props) {

    const [pitches, setPitches] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedPitch, setSelectedPitch] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const allPitches = useSelector((state) => state.pitches.pitches);
    const playlists = useSelector((state) => state.curatorPlaylists.playlists)


    // for PROD
    // useEffect(() => {
    // setPendingOffers(artistOffers.filter((offer)=> offer.status !== 'Completed'));
    // setCompletedOffers(artistOffers.filter((offer)=> offer.status === 'Completed'));
    // },[artistOffers]);

    //NEEDS TO BE REMOVED
    //for test purposes i am fetching the tracks here.
    const dispatch = useDispatch();

    //fetching pitches from DB every time the component renders
    useEffect(() => {
        dispatch(fetchPitches());
    }, []);

    //if allPitches changes then reset the pitches
    useEffect(() => {
        setPitches(allPitches);
    }, [allPitches])


    const handleCreateBidOnClick = (pitch, track) => {
        setIsFormOpen(true);
        setSelectedPitch(pitch);
        setSelectedTrack(track);
    }

    const genreSections = GENRES.map((genre) => {
        const filteredPitches = pitches.filter((pitch) => pitch.genre === genre);
        if (filteredPitches.length > 0) {
            return <div className={`${classes.ml_1}  ${classes.my_1}`}>
                <MusicComponent pitches={filteredPitches} title={genre} handleCreateBidOnClick={handleCreateBidOnClick} dataLimit={isFormOpen ? 3 : 4} />
            </div>
        }
    })

    const handleSearchInputChange = (searchText) => {
        if (searchText.length > 0) {
            const filteredPitches = allPitches.filter((pitch) => pitch.song_name.toLowerCase().includes(searchText.toLowerCase()));
            setPitches(filteredPitches);
        }
        else {
            setPitches(allPitches);
        }
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
        <div className={classes.curatorFeedMusicContainer}>
            <div className={classes.sideBarContainer}>
                <SideBar />
            </div>
            <div className={classes.curatorFeedMusicWrapper}>
                {/**Renders the song cards */}
                <div className={classes.curatorFeedMusicMainContainer}>
                    <CuratorFeedTopNavBar />

                    <div className={`${classes.ml_1} ${classes.my_1}`}>
                        <SearchBar id="search-bids" placeholder="Search for Bid" label="Search for Bid" onSearchInputChange={handleSearchInputChange} />
                    </div>

                    {genreSections}
                </div>
                {/**Renders the create a bid form */}
                {isFormOpen && <div className={classes.formContainer} style={{ flexGrow: isFormOpen ? 1 : 0 }}>
                    <h3>Create a Bid</h3>
                    <div className={classes.pitchDetailContainer}>
                        <img className={classes.pitchImg} src={selectedTrack.album.images[0].url} />
                        <div className={classes.pitchContent}>
                            <div className={classes.trackContent}>
                                <div>
                                    {selectedTrack.name}
                                </div>
                                <div>
                                    {millisToMinutesAndSeconds(selectedTrack.duration_ms)}
                                </div>
                            </div>
                            <div>
                                {selectedPitch.genre}
                            </div>
                        </div>
                    </div>

                    <div className={classes.bidFormContainer}>
                        <div className={classes.bidFormTitle}>Enter Bid Details</div>
                        <form>
                            <div className={classes.formRow}>
                                <div className={classes.formFieldSet} >
                                    <label for="playlists">Select Playlist</label>
                                    {/* <input type="text" list="playlistsOption" id="playlists" name="playlists" />
                                    <datalist id="playlistsOption">{playlistOptions}</datalist> */}
                                    <select name="playlist-options" id="playlist-options">
                                        {playlistOptions}
                                    </select>

                                </div>
                            </div>
                            <div className={classes.formRow}>
                                <div className={classes.formFieldSet}>
                                    <label for="bid-price">Bid Price</label>
                                    <input type="number" step="0.01" id="bid-price" name="bid-price" placeholder="$USD" required />
                                </div>
                                <div className={classes.formFieldSet}>
                                    <label for="playlist-genre">Genre Playlist</label>
                                    <select name="playlist-genre" id="playlist-genre">
                                        {genreOptions}
                                    </select>
                                </div>
                            </div>
                            <div className={classes.formRow}>

                                <div className={classes.formFieldSet}>
                                    <label>Placement On Playlist</label>
                                    <div className={classes.playlistSpot}>
                                        <input type="number" id="playlist-slot" name="playlist-slot" placeholder="Slot#" required />
                                        <div className={classes.playlistSpotDiv}>out of</div>
                                        <input type="number" id="playlist-total-slots" name="playlist-total-slots" placeholder="Total Number of Playlists" required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={classes.formFieldSet}>
                                    <label for="length-promotion">Length of Promotion</label>
                                    <input type="number" id="length-promotion" name="length-promotion" placeholder="Length of Promotion" required />
                                </div>
                            </div>
                            <div className={classes.form_btn_grp}>
                                <button>Cancel</button>
                                <button className={classes.btn_submit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default CuratorFeedMusicPage;