import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchPostById } from '../APIs/BlogPostApi';

const blogPostSlice = createSlice({
    name: 'blogsSlice',
    initialState: {
        posts: [],
        post: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchPostById.pending, (state) => {
                state.status = 'loading';
                state.post = null; // Reset post when starting new fetch
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.post = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                state.post = null;
            });
    }
});

export default blogPostSlice.reducer;