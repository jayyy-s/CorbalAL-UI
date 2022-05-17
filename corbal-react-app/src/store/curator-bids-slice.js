import { createSlice } from '@reduxjs/toolkit';
import { endPoint } from '../config';

/**
 * This slice of the state represents the bids of the logged in curator.
 */
const curatorBidsSlice = createSlice({
    name: 'curatorBids',
    initialState: {
        bids: []
    },
    reducers: {
        fetchCuratorBids(state, action) {
            state.bids = action.payload.bids;
        },
        postCuratorBid(state,action){
            state.bids.push(action.payload.bid)
        },
        updateCuratorBid(state,action){
            state.bids = state.bids.map((bid)=> {
                   return bid.id === action.payload.bid.id ? action.payload.bid : bid
              })
          }
    }
});

export const curatorBidsActions = curatorBidsSlice.actions;

//CURRENT SCENARIO
//1. Fetching all bids and then filtering the bids.
//IDEAL SCENARIO
//1. Hit an endpoint like  '/bids/:curatorId'.
//2. Get a response object consisting of only the curator bids.
export const fetchCuratorBids = (curatorId) => {
    return async (dispatch) => {

        //GET Request
        //Currently we are getting all the bids.
        //Ideally we will be sending a request to '/bids?curatorId=1' to obtain only the curator's bids.
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
            //this filtering should ideally be done on the backend.
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

/**
 * This method is to update a bid in the DB and update the state of the application
 * @param {object} bid 
 * @returns 
 */
export const postCuratorBid = (bid) => {
    return async (dispatch) => {

        const postBid = async () => {
            const response = await fetch(
                `${endPoint}/bids`,
                {
                    method : 'POST',
                    body: JSON.stringify(bid),
                    headers: {
                        "Content-type": "application/json"
                      }
                }
            );
            if (!response.ok) {
                throw new Error('Posting bid data failed.');
            }
            return await response.json();

        };

        try {
            const bid = await postBid();

            dispatch(
                curatorBidsActions.postCuratorBid({
                    bid
                })
            );
        } catch (error) {
            console.log("There was an error posting a new bid");
        }
    };
};

export const updateCuratorBid = (bid)=>{
    return async (dispatch) => {

        const putBid = async () => {
            const response = await fetch(
                `${endPoint}/bids/${bid.id}`,
                {
                    method : 'PUT',
                    body: JSON.stringify(bid),
                    headers: {
                        "Content-type": "application/json"
                      }
                }
            );
            if (!response.ok) {
                throw new Error('Updating bid data failed.');
            }
            return await response.json();

        };

        try {
            const bid = await putBid();

            dispatch(
                curatorBidsActions.updateCuratorBid({
                    bid
                })
            );
        } catch (error) {
            console.log("There was an error updating a bid");
        }
    };
}


export default curatorBidsSlice;