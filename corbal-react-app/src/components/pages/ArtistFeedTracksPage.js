import classes from '../css/ArtistFeedTracksPage.module.css';
import ArtistFeedTopNavBar from '../ArtistFeedTopNavBar';
import SearchBar from '../SearchBar';
import SortControl from '../SortControl';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import TracksComponent from '../ArtistFeedTracksComponent';
import SideBar from  '../SideBar';
import {fetchArtistTracks} from '../../store/artist-tracks-slice';


function ArtistFeedTracksPage(props) {
   
    let tracks = useSelector((state)=> state.artistTracks.tracks);
    

    //NEEDS TO BE REMOVED
    //for test purposes i am fetching the tracks here.
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchArtistTracks(1))
    },[])
    

    return (
        <div className={classes.artistFeedTracksContainer}>
            <div className={classes.sideBarContainer}>
                <SideBar />
            </div>
            <div className={classes.artistFeedTracksMainContainer}>

                <ArtistFeedTopNavBar />


                <div className={`${classes.ml_1} ${classes.my_1}`}>
                    <SearchBar id="search-tracks" placeholder="Search for Track" label="Search for Track" />
                </div>

                <div className={`${classes.ml_1}`}>
                <SortControl options={["Most Recent", "Most Popularity"]} />
                </div>

                <div className={`${classes.ml_1}`}>
                <TracksComponent tracks={tracks}/>
                </div>
            </div>

        </div>
    );

}

export default ArtistFeedTracksPage;