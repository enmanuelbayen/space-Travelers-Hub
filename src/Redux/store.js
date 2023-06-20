import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';
import rocketsReducer from './rockets/rocketsSlice';
import dragonsReducer from './dragons/dragonsSlice';

export default configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
    dragons: dragonsReducer,
  },
});
