import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/dragons');
  const data = await response.json();
  return data;
});

const initialState = {
  dragons: [],
  status: 'idle',
  error: null,
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const dragonId = action.payload;
      state.dragons = state.dragons.map((dragon) => {
        if (dragon.id === dragonId) {
          return {
            ...dragon,
            reserved: true,
          };
        }

        return dragon;
      });
    },
    cancelReservation: (state, action) => {
      const dragonId = action.payload;
      state.dragons = state.dragons.map((dragon) => {
        if (dragon.id === dragonId) {
          return {
            ...dragon,
            reserved: false,
          };
        }
        return dragon;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          type: dragon.type,
          flickr_images: dragon.flickr_images,
        }));
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { joinMission, cancelReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;
