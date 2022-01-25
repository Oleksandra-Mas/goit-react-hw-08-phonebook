import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { ActionType } from './action-types';

import {
    fetchContacts,
    deleteContact,
    insertContact,
} from '../../services/apiService';

export const changeFilter = createAction(ActionType.CHANGE_FILTER);

export const getContacts = createAsyncThunk(
    ActionType.GET_CONTACTS,
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const removeContact = createAsyncThunk(
    ActionType.DELETE_CONTACT,
    async (id, { rejectWithValue }) => {
        try {
            await deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const addContact = createAsyncThunk(
    ActionType.ADD_CONTACT,
    async (payload, { rejectWithValue }) => {
        try {
            const contact = await insertContact(payload);
            return contact;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
