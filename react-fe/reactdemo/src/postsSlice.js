import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
});

// create slice

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    errors: null,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  }, //
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, actions) => {
        state.loading = false;
        state.posts = actions.payload;
      })
      .addCase(fetchPosts.rejected, (state, actions) => {
        state.loading = false;
        state.errors = actions.error.message;
      });
  },
});

export const {addPost, deletePost} = postsSlice.actions
export default postsSlice.reducer;
