import {
  fetchContactsAll,
  removeContact,
  additionContact,
} from '../services/contactsApi';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async thunkAPI => {
    const contacts = await fetchContactsAll();
    return contacts;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { dispatch }) => {
    await removeContact(contactId);

    dispatch(fetchContacts());
    return contactId;
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    return await additionContact(newContact);
  }
);
