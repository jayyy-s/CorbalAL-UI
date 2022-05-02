import classes from '../css/CuratorFeedMusicPage.module.css';
import CuratorFeedTopNavBar from '../CuratorFeedTopNavBar';
import SideBar from '../CuratorSideBar';
import SearchBar from '../SearchBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MusicComponent from '../CuratorFeedMusicComponent';
import { fetchPitches } from '../../store/all-pitches-slice';
import { GENRES } from '../../utilities/constants';
import CreateBidFormComponent from '../CreateBidFormComponent';



function CuratorFeedMusicPage(props) {

    const [pitches, setPitches] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedPitch, setSelectedPitch] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const allPitches = useSelector((state) => state.pitches.pitches);

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

    const handleCloseBidOnClick = () => {
        setIsFormOpen(false);
        setSelectedPitch(null);
        setSelectedTrack(null);
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
                {isFormOpen && <CreateBidFormComponent selectedTrack={selectedTrack} selectedPitch={selectedPitch} closeBidForm={handleCloseBidOnClick} />}
            </div>
        </div>
    )
}

export default CuratorFeedMusicPage;