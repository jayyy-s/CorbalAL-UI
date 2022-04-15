import {
    createSlice
} from '@reduxjs/toolkit';
import {
    endPoint
} from '../config';

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

//ACTUAL SCENARIO
//1. Pass curatorSpotifyId
//2. Get a response object consisting of user playlists
//3.
export const fetchCuratorPlaylists = (curatorSpotifyId) => {
    return async (dispatch) => {

        //GET Request
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
            const playlists = await getPlaylistsRequest();
            
            // const playlists = data.filter(track =>track.curator_id===curatorId);

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