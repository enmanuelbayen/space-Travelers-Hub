import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/dragons');
    return response.data;
  },
);

const initialState = {};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
});

// export const {} = dragonsSlice.actions;

export default dragonsSlice.reducer;
