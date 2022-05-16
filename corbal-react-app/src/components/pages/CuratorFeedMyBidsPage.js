import classes from '../css/CuratorFeedMyBidsPage.module.css';
import CuratorFeedTopNavBar from '../CuratorFeedTopNavBar';
import SideBar from '../CuratorSideBar';
import SearchBar from '../SearchBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCuratorBids } from '../../store/curator-bids-slice';
import BidsComponent from '../CuratorFeedBidsComponent';
import CuratorRespondBidFormComponent from '../CuratorRespondBidFormComponent';

/**
 * A functional component to render the my-bids component of the curator feed.
 * @param {object} props 
 * @returns 
 */
function CuratorFeedMyBidsPage(props) {

    const [bidsPending, setPendingBids] = useState([]);
    const [bidsCompleted, setCompletedBids] = useState([]);
    const curatorBids = useSelector((state) => state.curatorBids.bids);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedBid, setSelectedBid] = useState(null);




    //FOR DEVELOPMENT PURPOSE
    //for test purposes i am fetching the bids here by hardcoding a curator id.
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchCuratorBids(2));
    // }, []);

    /**
     * This effect is used to set the no of Pending Bids and no Of Completed Bids
     */
    useEffect(() => {
        setPendingBids(getPendingBids());
        setCompletedBids(getCompletedBids());
    }, [curatorBids]);

    const getPendingBids = () => {
        return curatorBids.filter((bid) => bid.status !== 'Completed')
    }

    const getCompletedBids = () => {
        return curatorBids.filter((bid) => bid.status === 'Completed')
    }

    /**
     * A function to search for a bid.
     * @param {string} searchText 
     */
    const handleSearchInputChange = (searchText) => {
        if (searchText.length > 0) {
            const filteredPendingBids = curatorBids.filter((bid) => bid.status !== 'Completed' && bid.song_name.toLowerCase().includes(searchText.toLowerCase()));
            setPendingBids(filteredPendingBids);

            const filteredCompletedBids = curatorBids.filter((bid) => bid.status === 'Completed' && bid.song_name.toLowerCase().includes(searchText.toLowerCase()));
            setCompletedBids(filteredCompletedBids);
        }
        else {
            setPendingBids(getPendingBids());
            setCompletedBids(getCompletedBids());
        }
    }

    /**
     * A function to open the re-negotiation form
     * @param {object} bid 
     */
    const handleOpenForm = (bid) => {
        setIsFormOpen(true);
        setSelectedBid(bid);
    }

    /**
     * A function to close the re-negotiation form
     */
    const handleCloseForm = () => {
        setIsFormOpen(false);
        setSelectedBid(null);
    }

    return (
        <div className={classes.curatorFeedBidsContainer}>
            <div className={classes.sideBarContainer}>
                <SideBar />
            </div>
            <div className={classes.curatorFeedBidsWrapper}>
                <div className={classes.curatorFeedBidsMainContainer}>
                    <CuratorFeedTopNavBar />

                    <div className={`${classes.ml_1} ${classes.my_1}`}>
                        <SearchBar id="search-bids" placeholder="Search for Bid" label="Search for Bid" onSearchInputChange={handleSearchInputChange} />
                    </div>

                    <div className={`${classes.ml_1}  ${classes.my_1}`}>
                        <BidsComponent bids={bidsPending} title="Pending" handleOpenForm={handleOpenForm} dataLimit={isFormOpen ? 3 : 4} />
                    </div>


                    <div className={`${classes.ml_1}  ${classes.my_1}`}>
                        <BidsComponent bids={bidsCompleted} title="Completed" dataLimit={isFormOpen ? 3 : 4} />
                    </div>

                </div>
                {/**Renders the create a bid form */}
                {isFormOpen && <CuratorRespondBidFormComponent bid={selectedBid} closeBidForm={handleCloseForm} />}
            </div>
        </div>
    )
}

export default CuratorFeedMyBidsPage;