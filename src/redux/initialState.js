export const contactsInitialState = {
  contacts: {
    entities: [],
    isLoading: false,
    error: null,
  },
};
export const filterInitialState = {
  filter: '',
};
export const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};
