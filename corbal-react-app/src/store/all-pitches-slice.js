import { createSlice } from '@reduxjs/toolkit';
import { endPoint } from '../config';

/**
 * This slice is used to fetch all the pitches in the ecosystem.
 * It is needed to display the pitches in the Music Component of the Curator Feed.
 */
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