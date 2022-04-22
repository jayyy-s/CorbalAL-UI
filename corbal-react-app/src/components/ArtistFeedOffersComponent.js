import OfferCard from './ArtistFeedOfferCard';
import classes from './css/ArtistFeedOffersComponent.module.css';

function ArtistFeedOffersComponent(props){

    const offerCards = props.offers.map((offer) => { return(
        <OfferCard key={offer.id} offer={offer} />
    )
    })  

    return(
        <div className={classes.container}>
            {offerCards}
        </div>
    )
}

export default ArtistFeedOffersComponent;