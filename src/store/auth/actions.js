import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
} from '../../services/apiService';

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const data = await registerUser(credentials);
        return data;
    } catch (error) {
        if (error.message.includes('400')) {
            toast('Error creating user');
        }
        console.log(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const data = await loginUser(credentials);
        return data;
    } catch (error) {
        if (error.message.includes('400')) {
            toast('Login error');
        }
        console.log(error.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await logoutUser();
    } catch (error) {
        if (error.message.includes('401')) {
            toast('Logout error');
        }
        console.log(error.message);
    }
});

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (!persistedToken) {
            return thunkAPI.rejectWithValue();
        }

        try {
            const data = await getCurrentUser(persistedToken);
            return data;
        } catch (error) {
            if (error.message.includes('401')) {
                toast('Error getting current user');
            }
            console.log(error.message);
        }
    },
);
