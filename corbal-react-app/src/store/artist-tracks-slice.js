import {
    createSlice
} from '@reduxjs/toolkit';
import {
    endPoint
} from '../config';

const artistTracksSlice = createSlice({
    name: 'artistTracks',
    initialState: {
        tracks: []
    },
    reducers: {
        fetchArtistTracks(state, action) {
            state.tracks = action.payload.tracks;
        }
    }
});

export const artistTracksActions = artistTracksSlice.actions;

//ACTUAL SCENARIO
//1. Pass artistSpotifyId
//2. Get a response object consisting of user tracks
//3.
export const fetchArtistTracks = (artistSpotifyId) => {
    return async (dispatch) => {

        //GET Request
        const getTracksRequest = async () => {
            const response = await fetch(
                `${endPoint}/tracks`
            );
            if (!response.ok) {
                throw new Error('Getting tracks data failed.');
            }
            return await response.json();

        };

        try {
            const tracks = await getTracksRequest();
            
            // const tracks = data.filter(track =>track.artist_id===artistId);

            dispatch(
                artistTracksActions.fetchArtistTracks({
                    tracks: tracks
                })
            );
        } catch (error) {
            console.log("There was an error fetching tracks data");
        }
    };
};

export default artistTracksSlice;