import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//Utility to add JSON Web Token
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

//Utility to clear JSON Web Token
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = ''
// }
//Information about user:
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const logOut = createAsyncThunk(

)

export const logIn = createAsyncThunk(

)