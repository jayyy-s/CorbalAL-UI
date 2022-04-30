import classes from './css/CuratorFeedCompletedBidsComponent.module.css';
import BidCard from './CuratorFeedBidCard';

function CuratorFeedCompletedBidsComponent(props){
    
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