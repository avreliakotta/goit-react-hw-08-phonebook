import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

import { deleteContact, fetchContacts, addContact } from './thunks';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
} from '../.helpers/helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.entities = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)

      .addCase(deleteContact.fulfilled, handleFulfilled)
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.entities.push(payload);
      })
      .addCase(addContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
