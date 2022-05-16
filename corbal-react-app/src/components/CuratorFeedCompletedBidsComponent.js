import classes from './css/CuratorFeedCompletedBidsComponent.module.css';
import BidCard from './CuratorFeedBidCard';

/**
 * A component to render the BidCards.
 * @param {object} props 
 * @returns 
 */
function CuratorFeedCompletedBidsComponent(props){
    
    /**
     * Constructing the bid cards.
     */
    const bidCards = props.bids.map((bid) => { return(
        <BidCard key={bid.id} data={bid} />
    )
    })  

    return(
        <div className={classes.container}>
            {bidCards}
        </div>
    )
}

export default CuratorFeedCompletedBidsComponent;