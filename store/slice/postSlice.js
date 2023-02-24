import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: {},
  savedPosts: [],
  likedPosts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      state.post = action.payload.post;
    },
  },
});

export const { setPosts, setPost } = postSlice.actions;

export default postSlice.reducer;
