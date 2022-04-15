import {
    createSlice
} from '@reduxjs/toolkit';
import {
    endPoint
} from '../config';

const artistOffersSlice = createSlice({
    name: 'artistOffers',
    initialState: {
        offers: [],
        noOfCompletedOffers: 0,
        noOfPendingOffers: 0
    },
    reducers: {
        fetchArtistOffers(state, action) {
            //need to update the below two to reflect the actual number
            state.noOfCompletedOffers = 0;
            state.noOfPendingOffers = 0;


            state.offers = action.payload.offers;
        }
    }
});

export const artistOffersActions = artistOffersSlice.actions;

export const fetchArtistOffers = (artistId) => {
    return async (dispatch) => {

        //GET Request
        const getOffersRequest = async () => {
            const response = await fetch(
                `${endPoint}/offers`
            );
            if (!response.ok) {
                throw new Error('Getting offers data failed.');
            }
            return await response.json();

        };

        try {
            const data = await getOffersRequest();
            
            const offers = data.filter(offer =>offer.artist_id===artistId);

            dispatch(
                artistOffersActions.fetchArtistOffers({
                    offers: offers
                })
            );
        } catch (error) {
            console.log("There was an error fetching offers data");
        }
    };
};

export default artistOffersSlice;