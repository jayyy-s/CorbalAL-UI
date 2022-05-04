import OfferCard from './ArtistFeedOfferCard';
import SortControl from './SortControl';
import classes from './css/ArtistFeedOffersComponent.module.css';
import PaginationComponent from './PaginationComponent';
import {useState, useEffect} from 'react';

function ArtistFeedOffersComponent(props) {

    const [offers, setOffers] = useState(props.offers);
    const [sortOption, setSortOption] = useState('Price');
    const [isSorted, setIsSorted] = useState(false);

    useEffect(()=>{
     setOffers(props.offers); 
     setIsSorted(false);  
    },[props]);

    const offerCards = offers.map((offer) => {
        return (
            <OfferCard key={offer.id} offer={offer} />
        )
    })

        /**
     * Function to sort the offers everytime the component rerenders.
     * Sorting occurs only when the isSorted Option is set to false.
     * This will cause a component rerender.
     * Using the if statement to ensure the rerender happens only once
     */
         const sortOffers = () => {
            if (!isSorted) {
                let sortedOffers = [...offers];
                switch (sortOption) {
                    case 'Price':
                        sortedOffers = [...offers];
                        sortedOffers.sort((a, b) => a.price - b.price)
                        break;
                    case 'Time':
                        sortedOffers = [...offers];
                        sortedOffers.sort((a, b) => a.days_featured - b.days_featured)
                        break;
                }
                setOffers(sortedOffers);
                setIsSorted(true);
            }
        }
    
        //calling sort offers function to sort the offers before rendering them.
        sortOffers();



    const handleSortInputChange = (selectedOption) => {
        setIsSorted(false);
        setSortOption(selectedOption);
    }

    return (
        <>
            <div className={`${classes.ml_1} ${classes.title}`}>
                <div className={classes.sectionTitle}>
                {props.title}
                </div>
                <SortControl options={[{ option: "Price", value: "Price" }, { option: "Feature Time", value: "Time" }]} onSortInputChange={handleSortInputChange} />
            </div>
            <div className={classes.divider}></div>
            <div className={classes.container}>
                {/* {offerCards} */}
                <PaginationComponent  data={offers} RenderComponent={OfferCard} dataLimit={props.dataLimit} handleOnClick={props.handleOpenForm} />
            </div>
        </>
    )
}

export default ArtistFeedOffersComponent;