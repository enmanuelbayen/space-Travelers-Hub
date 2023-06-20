import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';
import rocketsReducer from './rockets/rocketsSlice';

export default configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});
