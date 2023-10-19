import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchContactsAll,
  removeContact,
  additionContact,
} from '../services/contactsApi';
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from '../services/usersApi';

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

export const register = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      return await registerUser(credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      return await loginUser(credentials);
    } catch (error) {
      console.error('Помилка під час логіну:', error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return await logoutUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.users.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }

      return await fetchCurrentUser(persistedToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
