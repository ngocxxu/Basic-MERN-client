import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const postsReducer = createSlice({
  name: 'postsReducer',
  initialState,
  reducers: {
    getPostsAction: (state, action) => {},
  },
});

export const { getPostsAction } = postsReducer.actions;
export default postsReducer.reducer;
