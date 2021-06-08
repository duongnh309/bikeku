import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import accountApi from '../../api/accountApi';

export const register = createAsyncThunk('user/register', async (payload) => {
  //call API to register
  const data = await accountApi.register(payload);
  //save data to local storage
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data));
  //return to user data
  return data;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  //call API to register
  const data = await accountApi.login(payload);
  console.log(data);
  //save data to local storage
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data));
  //return to user data
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  }
});

const { reducer } = userSlice;

export default reducer;