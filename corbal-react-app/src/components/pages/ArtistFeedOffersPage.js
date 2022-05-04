import classes from '../css/ArtistFeedOffersPage.module.css';
import ArtistFeedTopNavBar from '../ArtistFeedTopNavBar';
import SideBar from '../SideBar';
import SearchBar from '../SearchBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArtistOffers } from '../../store/artist-offers-slice';
import { fetchArtistTracks } from '../../store/artist-tracks-slice';
import OffersComponent from '../ArtistFeedOffersComponent';
import ArtistRespondBidFormComponent from '../ArtistRespondBidFormComponent';



function ArtistFeedOffersPage(props) {

    const [offersPending, setPendingOffers] = useState([]);
    const [offersCompleted, setCompletedOffers] = useState([]);
    const artistOffers = useSelector((state) => state.artistOffers.offers);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);

    // for PROD
    // useEffect(() => {
    // setPendingOffers(artistOffers.filter((offer)=> offer.status !== 'Completed'));
    // setCompletedOffers(artistOffers.filter((offer)=> offer.status === 'Completed'));
    // },[artistOffers]);

    //NEEDS TO BE REMOVED
    //for test purposes i am fetching the tracks here.
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchArtistTracks(1));
    //     dispatch(fetchArtistOffers(1));
    // }, []);

    const getPendingOffers = () => {
        return artistOffers.filter((offer) => offer.status !== 'Completed')
    }

    const getCompletedOffers = () => {
        return artistOffers.filter((offer) => offer.status === 'Completed')
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

    const handleOpenForm = (offer) => {
        setIsFormOpen(true);
        setSelectedOffer(offer);
    }


    const handleCloseForm = () => {
        setIsFormOpen(false);
        setSelectedOffer(null);
    }

    return (
        <div className={classes.artistFeedOffersContainer}>
            <div className={classes.sideBarContainer}>
                <SideBar />
            </div>
            <div className={classes.artistFeedOfferWrapper}>
                <div className={classes.artistFeedOffersMainContainer}>
                    <ArtistFeedTopNavBar />

                    <div className={`${classes.ml_1} ${classes.my_1}`}>
                        <SearchBar id="search-bids" placeholder="Search for Bid" label="Search for Bid" onSearchInputChange={handleSearchInputChange} />
                    </div>

                    <div className={`${classes.ml_1} ${classes.offersContainer} ${classes.my_1}`}>
                        <OffersComponent offers={offersPending} title="Pending" handleOpenForm={handleOpenForm} dataLimit={isFormOpen ? 3 : 4} />
                    </div>


                    <div className={`${classes.ml_1} ${classes.offersContainer} ${classes.my_1}`}>
                        <OffersComponent offers={offersCompleted} title="Completed" dataLimit={isFormOpen ? 3 : 4} />
                    </div>

                </div>
                {/**Renders the create a bid form */}
                {isFormOpen && <ArtistRespondBidFormComponent offer={selectedOffer} closeBidForm={handleCloseForm} />}
            </div>
        </div>
    )
}

export default ArtistFeedOffersPage;