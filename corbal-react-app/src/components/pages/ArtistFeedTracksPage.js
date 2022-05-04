import classes from '../css/ArtistFeedTracksPage.module.css';
import ArtistFeedTopNavBar from '../ArtistFeedTopNavBar';
import SearchBar from '../SearchBar';
import SortControl from '../SortControl';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TracksComponent from '../ArtistFeedTracksComponent';
import SideBar from '../SideBar';
import { fetchArtistTracks } from '../../store/artist-tracks-slice';


function ArtistFeedTracksPage(props) {

    const [tracks, setTracks] = useState([]);
    const [sortOption, setSortOption] = useState('Name');
    const [isSorted, setIsSorted] = useState(false);
    const artistTracks = useSelector((state) => state.artistTracks.tracks);

    // for PROD
    // useEffect(() => {
    //     const sortedTracks=[...artistTracks];
    //     sortedTracks.sort((a, b) => {
    //         const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    //         const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    //         if (nameA < nameB) {
    //           return -1;
    //         }
    //         if (nameA > nameB) {
    //           return 1;
    //         }
    //         // names must be equal
    //         return 0;
    //       })
    //     setTracks(sortedTracks);
    // },[artistTracks]);

    //NEEDS TO BE REMOVED
    //for test purposes i am fetching the tracks here.
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchArtistTracks());
    // }, []);

    //NEEDS TO BE REMOVED
    //for test purposes
    //sorting the tracks i get from artistTracks
    useEffect(() => {
        const sortedTracks = [...artistTracks];
        sortedTracks.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        })
        setTracks(sortedTracks);
        setIsSorted(true);
        // handleSortInputChange(sortOption);
    }, [artistTracks])


    /**
     * Function to sort the tracks everytime the component rerenders.
     * Sorting occurs only when the isSorted Option is set to false.
     * This will cause a component rerender.
     * Using the if statement to ensure the rerender happens only once
     */
    const sortTracks = () => {
        if (!isSorted) {
            let sortedTracks = [...tracks];
            switch (sortOption) {
                case 'Name':
                    sortedTracks.sort((a, b) => {
                        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    });

                    break;
                case 'Duration':
                    sortedTracks = [...tracks];
                    sortedTracks.sort((a, b) => a.duration_ms - b.duration_ms)
                    break;
            }
            setTracks(sortedTracks);
            setIsSorted(true);
        }
    }

    //calling sort tracks function to sort the tracks before rendering them.
    sortTracks();

    /**
     * Function to filter the tracks.
     * This will cause a rerender of the component.
     * @param {string} searchText 
     */
    const handleSearchInputChange = (searchText) => {
        if (searchText.length > 0) {
            const filteredTracks = artistTracks.filter((track) => track.name.toLowerCase().includes(searchText.toLowerCase()));
            setTracks(filteredTracks);
            setIsSorted(false);
        }
        else {
            setTracks(artistTracks);
        }
    }


    /**
     * Function to sort the tracks.
     * We set isSorted to false to cause a rerender of the component.
     * @param {string} selectedOption 
     */
    const handleSortInputChange = (selectedOption) => {
        setIsSorted(false);
        setSortOption(selectedOption);
    }

    return (
        <div className={classes.artistFeedTracksContainer}>
            <div className={classes.sideBarContainer}>
                <SideBar />
            </div>
            <div className={classes.artistFeedTracksMainContainer}>

                <ArtistFeedTopNavBar />


                <div className={`${classes.ml_1} ${classes.my_1}`}>
                    <SearchBar id="search-tracks" placeholder="Search for Track" label="Search for Track" onSearchInputChange={handleSearchInputChange} />
                </div>

                <div className={`${classes.ml_1}`}>
                    <SortControl options={[{ option: "Name", value: "Name" }, { option: "Duration", value: "Duration" }]} onSortInputChange={handleSortInputChange} />
                </div>

                <div className={`${classes.ml_1} ${classes.tracksContainer} ${classes.my_1}`}>
                    <TracksComponent tracks={tracks} />
                </div>
            </div>

        </div>
    );

}

export default ArtistFeedTracksPage;