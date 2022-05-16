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


/**
 * A functional component to render the Offers component of the Artist Feed
 * @param {object} props 
 * @returns 
 */
function ArtistFeedOffersPage(props) {

    const [offersPending, setPendingOffers] = useState([]);
    const [offersCompleted, setCompletedOffers] = useState([]);
    const artistOffers = useSelector((state) => state.artistOffers.offers);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);

    const dispatch = useDispatch();



    //FOR DEVELOPMENT/TESTING PURPOSE
    //for test purposes i am fetching the tracks here by hardcoding an artist id
    // useEffect(() => {
    //     dispatch(fetchArtistOffers(1));
    // }, []);

    const getPendingOffers = () => {
        return artistOffers.filter((offer) => offer.status !== 'Completed')
    }

    const getCompletedOffers = () => {
        return artistOffers.filter((offer) => offer.status === 'Completed')
    }

    /**
     * artistOffers would be available as we are fetching the artist offers when the user logs in.
     * Therefore, this effect would run only once (because artistOffers won't change) i.e. when the component is rendered.
     */
    useEffect(() => {
        setPendingOffers(getPendingOffers());
        setCompletedOffers(getCompletedOffers());
    }, [artistOffers]);

    /**
     * Function to search for offer.
     * This will cause a rerender of the component.
     * @param {string} searchText 
     */
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

    /**
     * A function to open the form.
     * @param {object} offer 
     */
    const handleOpenForm = (offer) => {
        setIsFormOpen(true);
        setSelectedOffer(offer);
    }

    /**
     * A function to close the form.
     */
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