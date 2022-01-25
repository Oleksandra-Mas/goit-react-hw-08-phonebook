import { createAsyncThunk } from '@reduxjs/toolkit';

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
        console.error(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const data = await loginUser(credentials);
        return data;
    } catch (error) {
        console.error(error.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await logoutUser();
    } catch (error) {
        console.error(error.message);
    }
});

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            console.log('Токена нет, уходим из fetchCurrentUser');
            return thunkAPI.rejectWithValue();
        }

        try {
            const data = await getCurrentUser();
            return data;
        } catch (error) {
            console.error(error.message);
        }
    },
);
