
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('users/fetchUser', async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default usersSlice.reducer;
