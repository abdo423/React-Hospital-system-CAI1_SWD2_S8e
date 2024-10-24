import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_BASE_URL + '/posts';
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (postData) => {
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('author', postData.author);
    formData.append('content', postData.content);
    formData.append('image', postData.image);

    const response = await axios.post('/api/blogposts', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
});

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, postData }) => {
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('author', postData.author);
    formData.append('content', postData.content);
    if (postData.image) {
        formData.append('image', postData.image);
    }

    const response = await axios.put(`/api/blogposts/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    const response = await axios.delete(`/api/blogposts/${id}`);
    return response.data;
});