import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.contacts || [];
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return filter
      ? contacts.entities.filter(entity =>
          entity.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts.entities;
  }
);
