import { createSlice } from '@reduxjs/toolkit';
import { endPoint } from '../config';

/**
 * This slice represents the curator's playlists
 */
const curatorPlaylistsSlice = createSlice({
    name: 'curatorPlaylists',
    initialState: {
        playlists: []
    },
    reducers: {
        fetchCuratorPlaylists(state, action) {
            state.playlists = action.payload.playlists;
        }
    }
});

export const curatorPlaylistsActions = curatorPlaylistsSlice.actions;

//CURRENT SCENARIO
//1. Fetching ALL playlists from our db.
//IDEAL SCENARIO
//1. Hit an endpoint like '/playlists/:curatorSpotifyId'.
//2. Get a response object consisting of ONLY the curator's playlists.
export const fetchCuratorPlaylists = (curatorSpotifyId) => {
    return async (dispatch) => {

        //GET Request
        //Currently we are getting all the playlists.
        //Ideally we will be sending a request to '/playlists?curatorSpotifyId=1' to obtain only the curator's playlists.
        const getPlaylistsRequest = async () => {
            const response = await fetch(
                `${endPoint}/playlists`
            );
            if (!response.ok) {
                throw new Error('Getting playlists data failed.');
            }
            return await response.json();

        };

        try {
            const data = await getPlaylistsRequest();
            
            const playlists = data.filter(playlist =>playlist.owner.id===curatorSpotifyId);

            dispatch(
                curatorPlaylistsActions.fetchCuratorPlaylists({
                    playlists: playlists
                })
            );
        } catch (error) {
            console.log("There was an error fetching playlists data");
        }
    };
};

export default curatorPlaylistsSlice;