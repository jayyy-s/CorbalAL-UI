import classes from '../css/ArtistFeedOffersPage.module.css';
import ArtistFeedTopNavBar from '../ArtistFeedTopNavBar';
import SideBar from '../SideBar';
import SearchBar from '../SearchBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArtistOffers } from '../../store/artist-offers-slice';
import { fetchArtistTracks } from '../../store/artist-tracks-slice';
import OffersComponent from '../ArtistFeedOffersComponent';


function ArtistFeedOffersPage(props) {

    const [offersPending, setPendingOffers] = useState([]);
    const [offersCompleted, setCompletedOffers] = useState([]);
    const artistOffers = useSelector((state) => state.artistOffers.offers);

    // for PROD
    // useEffect(() => {
    // setPendingOffers(artistOffers.filter((offer)=> offer.status !== 'Completed'));
    // setCompletedOffers(artistOffers.filter((offer)=> offer.status === 'Completed'));
    // },[artistOffers]);

    //NEEDS TO BE REMOVED
    //for test purposes i am fetching the tracks here.
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchArtistTracks(1));
        dispatch(fetchArtistOffers(1));
    }, []);

    const getPendingOffers=()=>{
      return  artistOffers.filter((offer) => offer.status !== 'Completed')
    }

    const getCompletedOffers=()=>{
        return  artistOffers.filter((offer) => offer.status === 'Completed')
      }

    //NEEDS TO BE REMOVED
    //for test
    useEffect(() => {
        setPendingOffers(getPendingOffers());
        setCompletedOffers(getCompletedOffers());
    }, [artistOffers]);

    const handleSearchInputChange = (searchText) => {
        if (searchText.length > 0) {
            const filteredPendingOffers = artistOffers.filter((offer) => offer.status !== 'Completed' && offer.song_name.toLowerCase().includes(searchText.toLowerCase()));
            setPendingOffers(filteredPendingOffers);
           
            const filteredCompletedOffers = artistOffers.filter((offer) => offer.status === 'Completed' && offer.song_name.toLowerCase().includes(searchText.toLowerCase()));
            setCompletedOffers(filteredCompletedOffers);
        }
        else {
            setPendingOffers(getPendingOffers());
            setCompletedOffers(getCompletedOffers());
        }
    }

    return (
        <div className={classes.artistFeedOffersContainer}>
            <div className={classes.sideBarContainer}>
                <SideBar />
            </div>
            <div className={classes.artistFeedOffersMainContainer}>
                <ArtistFeedTopNavBar />

                <div className={`${classes.ml_1} ${classes.my_1}`}>
                    <SearchBar id="search-bids" placeholder="Search for Bid" label="Search for Bid" onSearchInputChange={handleSearchInputChange} />
                </div>

                <div className={`${classes.ml_1}`}>
                    Pending
                </div>
                <div className={classes.divider}></div>

                <div className={`${classes.ml_1} ${classes.offersContainer} ${classes.my_1}`}>
                    <OffersComponent offers={offersPending} />
                </div>

                <div className={`${classes.ml_1}`}>
                    Completed
                </div>
                <div className={classes.divider}></div>

                <div className={`${classes.ml_1} ${classes.offersContainer} ${classes.my_1}`}>
                    <OffersComponent offers={offersCompleted} />
                </div>

            </div>
        </div>
    )
}

export default ArtistFeedOffersPage;