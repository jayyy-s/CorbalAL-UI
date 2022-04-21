import classes from '../css/ArtistFeedTracksPage.module.css';
import ArtistFeedTopNavBar from '../ArtistFeedTopNavBar';
import SearchBar from '../SearchBar';
import SortControl from '../SortControl';
import {useSelector} from 'react-redux';
import TracksComponent from '../ArtistFeedTracksComponent';
import SideBar from  '../SideBar';

function ArtistFeedTracksPage(props) {
   
    const tracks = useSelector((state)=> state.artistTracks.tracks);

    return (
        <div className={classes.artistFeedTracksContainer}>
            <div className={classes.sideBarContainer}>
                <SideBar />
            </div>
            <div className={classes.artistFeedTracksMainContainer}>

                <ArtistFeedTopNavBar />

                <div className={classes.ml_1}>
                    <SearchBar id="search-tracks" placeholder="Search for Track" label="Search for Track" />
                    <SortControl options={["Most Recent", "Most Popularity"]} />
                </div>

                <TracksComponent tracks={tracks}/>

            </div>

        </div>
    );

}

export default ArtistFeedTracksPage;