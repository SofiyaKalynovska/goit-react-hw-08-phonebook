import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//Utility to add JSON Web Token
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

//Utility to clear JSON Web Token
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ''
}
//Information about user:
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {

    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data
    } catch (error) {
      alert("There is no user registered by this email and password! Please provide right email and password or register.")
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) { return thunkAPI.rejectWithValue('No valid token') };

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)