import { configureStore } from '@reduxjs/toolkit';
import { mineReducer } from '../features/mineFinder';

export default configureStore({
  reducer: {
    mineLocations: mineReducer,
  },
});
