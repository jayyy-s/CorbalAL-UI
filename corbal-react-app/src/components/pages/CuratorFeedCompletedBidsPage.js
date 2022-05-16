import classes from '../css/CuratorFeedCompletedBidsPage.module.css';
import CuratorFeedTopNavBar from '../CuratorFeedTopNavBar';
import SearchBar from '../SearchBar';
import SortControl from '../SortControl';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BidsComponent from '../CuratorFeedCompletedBidsComponent';
import SideBar from '../CuratorSideBar';
import { fetchCompletedBids } from '../../store/completed-bids-slice';

/**
 * A functional component to render the completed bids component of the curator feed.
 * @param {object} props 
 * @returns 
 */
function CuratorFeedCompletedBidsPage(props) {

    const [bids, setBids] = useState([]);
    const [sortOption, setSortOption] = useState('Name');
    const [isSorted, setIsSorted] = useState(false);
    const completedBids = useSelector((state) => state.completedBids.bids);

    //Fetching all completed bids
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCompletedBids());
    }, []);

 
    useEffect(() => {
        const sortedBids = [...completedBids];
        sortedBids.sort((a, b) => {
            const nameA = a.song_name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.song_name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        })
        setBids(sortedBids);
        setIsSorted(true);
    }, [completedBids])


    /**
     * Function to sort the bids everytime the component rerenders.
     * Sorting occurs only when the isSorted Option is set to false.
     * This will cause a component rerender.
     * Using the if statement to ensure the rerender happens only once
     */
    const sortBids = () => {
        if (!isSorted) {
            let sortedBids = [...bids];
            switch (sortOption) {
                case 'Name':
                    sortedBids.sort((a, b) => {
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
                case 'Recent':
                    sortedBids = [...bids];
                    sortedBids.sort((a, b) => new Date(a.created_at.split(' ')[0]) - new Date(b.created_at.split(' ')[0]))
                    break;
            }
            setBids(sortedBids);
            setIsSorted(true);
        }
    }

    //calling sort bids function to sort the bids before rendering them.
    sortBids();

    /**
     * Function to filter the bids.
     * This will cause a rerender of the component.
     * @param {string} searchText 
     */
    const handleSearchInputChange = (searchText) => {
        if (searchText.length > 0) {
            const filteredBids = completedBids.filter((bid) => bid.song_name.toLowerCase().includes(searchText.toLowerCase()));
            setBids(filteredBids);
            setIsSorted(false);
        }
        else {
            setBids(completedBids);
        }
    }


    /**
     * Function to sort the bids.
     * We set isSorted to false to cause a rerender of the component.
     * @param {string} selectedOption 
     */
    const handleSortInputChange = (selectedOption) => {
        setIsSorted(false);
        setSortOption(selectedOption);
    }

    return (
        <div className={classes.curatorFeedCompletedBidsContainer}>
            <div className={classes.sideBarContainer}>
                <SideBar />
            </div>
            <div className={classes.curatorFeedCompletedBidsMainContainer}>

                <CuratorFeedTopNavBar />


                <div className={`${classes.ml_1} ${classes.my_1}`}>
                    <SearchBar id="search-bids" placeholder="Search for Track" label="Search for Track" onSearchInputChange={handleSearchInputChange} />
                </div>

                <div className={`${classes.ml_1}`}>
                    <SortControl options={[{ option: "Song Name", value: "Name" }, { option: "Most Recent", value: "Recent" }]} onSortInputChange={handleSortInputChange} />
                </div>

                <div className={`${classes.ml_1} ${classes.bidsContainer} ${classes.my_1}`}>
                    <BidsComponent bids={bids} />
                </div>
            </div>

        </div>
    );

}

export default CuratorFeedCompletedBidsPage;