import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    getContacts,
    removeContact,
    changeFilter,
    addContact,
} from './actions';

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
    [getContacts.fulfilled]: (_, action) => action.payload,
    [removeContact.fulfilled]: (state, { payload }) => {
        const { id } = payload;
        return state.filter(contact => contact.id !== id);
    },
    [addContact.fulfilled]: (state, { payload }) => {
        const newState = [...state, payload];
        return newState;
    },
});

export default combineReducers({ items, filter });
