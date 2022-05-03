import classes from '../css/CuratorFeedMyBidsPage.module.css';
import CuratorFeedTopNavBar from '../CuratorFeedTopNavBar';
import SideBar from '../CuratorSideBar';
import SearchBar from '../SearchBar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCuratorBids } from '../../store/curator-bids-slice';
import BidsComponent from '../CuratorFeedBidsComponent';
import CuratorRespondBidFormComponent from '../CuratorRespondBidFormComponent';


function CuratorFeedMyBidsPage(props) {

    const [bidsPending, setPendingBids] = useState([]);
    const [bidsCompleted, setCompletedBids] = useState([]);
    const curatorBids = useSelector((state) => state.curatorBids.bids);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedBid, setSelectedBid] = useState(null);


    // for PROD
    // useEffect(() => {
    // setPendingBids(curatorBids.filter((bid)=> bid.status !== 'Completed'));
    // setCompletedBids(curatorBids.filter((bid)=> bid.status === 'Completed'));
    // },[curatorBids]);

    //NEEDS TO BE REMOVED
    //for test purposes i am fetching the bids here.
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCuratorBids(2));
    }, []);

    //NEEDS TO BE REMOVED
    //for test
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

    const handleOpenForm = (bid) => {
        setIsFormOpen(true);
        setSelectedBid(bid);
    }


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