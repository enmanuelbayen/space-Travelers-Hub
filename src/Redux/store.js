import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';
import dragonsReducer from './dragons/dragonsSlice';

export default configureStore({
  reducer: {
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
});
