import BidCard from './CuratorFeedBidCard';
import SortControl from './SortControl';
import classes from './css/CuratorFeedBidsComponent.module.css';
import PaginationComponent from './PaginationComponent';
import {useState, useEffect} from 'react';

function CuratorFeedBidsComponent(props) {

    const [bids, setBids] = useState(props.bids);
    const [sortOption, setSortOption] = useState('Price');
    const [isSorted, setIsSorted] = useState(false);

    useEffect(()=>{
     setBids(props.bids); 
     setIsSorted(false);  
    },[props]);

    // const offerCards = bids.map((offer) => {
    //     return (
    //         <BidCard key={offer.id} offer={offer} />
    //     )
    // })

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
                    case 'Price':
                        sortedBids = [...bids];
                        sortedBids.sort((a, b) => a.price - b.price)
                        break;
                    case 'Time':
                        sortedBids = [...bids];
                        sortedBids.sort((a, b) => a.days_featured - b.days_featured)
                        break;
                }
                setBids(sortedBids);
                setIsSorted(true);
            }
        }
    
        //calling sort bids function to sort the bids before rendering them.
        sortBids();



    const handleSortInputChange = (selectedOption) => {
        setIsSorted(false);
        setSortOption(selectedOption);
    }

    return (
        <>
            <div className={`${classes.ml_1} ${classes.title}`}>
                <div>
                {props.title}
                </div>
                <SortControl options={[{ option: "Price", value: "Price" }, { option: "Feature Time", value: "Time" }]} onSortInputChange={handleSortInputChange} />
            </div>
            <div className={classes.divider}></div>
            <div className={classes.container}>
                {/* {offerCards} */}
                <PaginationComponent  data={bids} RenderComponent={BidCard} dataLimit={props.dataLimit} handleOnClick={props.handleOpenForm}/>
            </div>
        </>
    )
}

export default CuratorFeedBidsComponent;