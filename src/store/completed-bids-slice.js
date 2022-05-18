import { createSlice } from '@reduxjs/toolkit';
import { endPoint } from '../config';

const completedBidsSlice = createSlice({
    name: 'completedBids',
    initialState: {
        bids: []
    },
    reducers: {
        fetchCompletedBids(state, action) {
            state.bids = action.payload.bids;
        }
    }
});

export const completedBidsActions = completedBidsSlice.actions;

//CURRENT SCENARIO
//1. Fetching ALL bids from our db.
//IDEAL SCENARIO
//1. Hit an endpoint like '/bids?status=completed'.
//2. Get a response object consisting of ONLY the completed bids.
export const fetchCompletedBids = () => {
    return async (dispatch) => {

        //GET Request
        //Currently we are getting all the bids.
        //Ideally we will be sending a request to 'bids?status=completed' to obtain only the completed bids.
        const getCompletedBidsRequest = async () => {
            const response = await fetch(
                `${endPoint}/bids`
            );
            if (!response.ok) {
                throw new Error('Getting bids data failed.');
            }
            return await response.json();

        };

        try {
            const allBids = await getCompletedBidsRequest();
            
            //This filtering should ideally be done in the backend
            const bids = allBids.filter(bid =>bid.status==="Completed");

            dispatch(
                completedBidsActions.fetchCompletedBids({
                    bids
                })
            );
        } catch (error) {
            console.log("There was an error fetching bids data");
        }
    };
};

export default completedBidsSlice;