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
        },
        updateArtistOffer(state,action){
          state.offers = state.offers.map((offer)=> {
                 return offer.id === action.payload.offer.id ? action.payload.offer : offer
            })
        }
    }
});

export const artistOffersActions = artistOffersSlice.actions;

//CURRENT SCENARIO
//1. Fetching all offers and then filtering the offers.
//IDEAL SCENARIO
//1. Hit an endpoint like  '/offers/:artistId'.
//2. Get a response object consisting of only the artist offers.
export const fetchArtistOffers = (artistId) => {
    return async (dispatch) => {

        //GET Request
        //Currently we are getting all the offers.
        //Ideally we will be sending a request to '/offers?artistId=1' to obtain only the artist's offers.
        const getOffersRequest = async () => {
            const response = await fetch(
                `${endPoint}/bids`
            );
            if (!response.ok) {
                throw new Error('Getting offers data failed.');
            }
            return await response.json();

        };

        try {
            const data = await getOffersRequest();
            //this filtering should ideally be done on the backend.
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

export const updateArtistOffer = (offer)=>{
    return async (dispatch) => {

        const putOffer = async () => {
            const response = await fetch(
                `${endPoint}/bids/${offer.id}`,
                {
                    method : 'PUT',
                    body: JSON.stringify(offer),
                    headers: {
                        "Content-type": "application/json"
                      }
                }
            );
            if (!response.ok) {
                throw new Error('Updating offer data failed.');
            }
            return await response.json();

        };

        try {
            const offer = await putOffer();

            dispatch(
                artistOffersActions.updateArtistOffer({
                    offer
                })
            );
        } catch (error) {
            console.log("There was an error updating a offer");
        }
    };
}

export default artistOffersSlice;