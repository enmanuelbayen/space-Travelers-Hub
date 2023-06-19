import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';

export default configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
