import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = process.env.REACT_APP_RAILS_URL || 'http://127.0.0.1:3000/api/v1/messages';

const initialState = {
  value: '',
  loading: false,
  error: false,
  errorMessage: '',
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data.message;
    } catch (error) {
      thunkAPI.dispatch(fetchGreeting.rejected(error.message));
      return null;
    }
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setGreeting: (state, action) => {
      state.value = action.payload;
      state.error = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessage = '';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
        state.errorMessage = '';
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { setGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;
