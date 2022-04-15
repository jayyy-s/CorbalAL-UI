import {
    createSlice
} from '@reduxjs/toolkit';
import {
    endPoint
} from '../config';

const curatorBidsSlice = createSlice({
    name: 'curatorBids',
    initialState: {
        bids: [],
        noOfCompletedBids: 0,
        noOfPendingBids: 0
    },
    reducers: {
        fetchCuratorBids(state, action) {
            //need to update the below two to reflect the actual number
            state.noOfCompletedBids = 0;
            state.noOfPendingBids = 0;


            state.bids = action.payload.bids;
        }
    }
});

export const curatorBidsActions = curatorBidsSlice.actions;

export const fetchCuratorBids = (curatorId) => {
    return async (dispatch) => {

        //GET Request
        const getBidsRequest = async () => {
            const response = await fetch(
                `${endPoint}/bids`
            );
            if (!response.ok) {
                throw new Error('Getting bids data failed.');
            }
            return await response.json();

        };

        try {
            const data = await getBidsRequest();
            
            const bids = data.filter(bid =>bid.curator_id===curatorId);

            dispatch(
                curatorBidsActions.fetchCuratorBids({
                    bids: bids
                })
            );
        } catch (error) {
            console.log("There was an error fetching bids data");
        }
    };
};

export default curatorBidsSlice;