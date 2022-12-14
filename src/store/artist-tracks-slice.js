import { createSlice } from '@reduxjs/toolkit';
import { endPoint } from '../config';

/**
 * This slice is used to fetch the logged in artist's tracks.
 */
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

//CURRENT SCENARIO
//1. Fetching ALL tracks from our db.
//IDEAL SCENARIO
//1. Hit an endpoint like '/tracks/:artistSpotifyId'.
//2. Get a response object consisting of ONLY the artist tracks.
export const fetchArtistTracks = (artistSpotifyId) => {
    return async (dispatch) => {

        //GET Request
        //Currently we are getting all the tracks.
        //Ideally we will be sending a request to '/tracks?artistId=1' to obtain only the artist's tracks.
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
            
             const artistTracks = tracks.filter(track =>
                    track.artists.filter(artist => artist.id === artistSpotifyId).length > 0
             );

            dispatch(
                artistTracksActions.fetchArtistTracks({
                    tracks: artistTracks
                })
            );
        } catch (error) {
            console.log("There was an error fetching tracks data");
        }
    };
};

export default artistTracksSlice;