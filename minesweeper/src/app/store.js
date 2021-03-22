import { configureStore } from '@reduxjs/toolkit';
import { mineReducer } from '../features/sliceCreator';

export default configureStore({
  reducer: {
    mineLocations: mineReducer,
  },
});
