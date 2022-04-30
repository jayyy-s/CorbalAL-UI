import {
    createSlice
} from '@reduxjs/toolkit';
import {
    endPoint
} from '../config';

const allPitchesSlice = createSlice({
    name: 'allPitches',
    initialState: {
        pitches: []
    },
    reducers: {
        fetchPitches(state, action) {
            state.pitches = action.payload.pitches;
        }
    }
});

export const pitchesActions = allPitchesSlice.actions;

//CURRENT SCENARIO
//1. Fetching ALL pitches from our db.
export const fetchPitches = () => {
    return async (dispatch) => {

        //GET Request
        //Currently we are getting all the tracks.
        //Ideally we will be sending a request to '/tracks?artistId=1' to obtain only the artist's tracks.
        const getPitchesRequest = async () => {
            const response = await fetch(
                `${endPoint}/pitches`
            );
            if (!response.ok) {
                throw new Error('Getting pitches data failed.');
            }
            return await response.json();

        };

        try {
            const pitches = await getPitchesRequest();

            dispatch(
                pitchesActions.fetchPitches({
                    pitches
                })
            );
        } catch (error) {
            console.log("There was an error fetching pitches data");
        }
    };
};

export default allPitchesSlice;