import {
  configureStore
} from '@reduxjs/toolkit';

import artistOffersSlice from './artist-offers-slice';
import artistTracksSlice from './artist-tracks-slice';

import curatorBidsSlice from './curator-bids-slice';
import curatorPlaylistsSlice from './curator-playlists-slice';
import completedBidsSlice from './completed-bids-slice';

import allPitchesSlice from './all-pitches-slice';

import userSlice from './user-slice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    artistOffers: artistOffersSlice.reducer,
    artistTracks: artistTracksSlice.reducer,
    curatorBids: curatorBidsSlice.reducer,
    curatorPlaylists: curatorPlaylistsSlice.reducer,
    pitches : allPitchesSlice.reducer,
    completedBids: completedBidsSlice.reducer
  },
});

export default store;