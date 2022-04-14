import { configureStore } from '@reduxjs/toolkit';

import artistOffersSlice from './artist-offers-slice';
import userSlice from './user-slice';

const store = configureStore({
  reducer: {user:userSlice.reducer ,artistOffers: artistOffersSlice.reducer},
});

export default store;
