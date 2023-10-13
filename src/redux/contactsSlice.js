import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

import { deleteContact, fetchContacts, addContact } from './thunks';
import {
  handlePanding,
  handleFulfilled,
  handleRejected,
} from '../.helpers/helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePanding)

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.entities = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePanding)

      .addCase(deleteContact.fulfilled, handleFulfilled)
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(addContact.pending, handlePanding)

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.entities.push(payload);
      })
      .addCase(addContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
