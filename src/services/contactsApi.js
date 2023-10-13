import axios from 'axios';

axios.defaults.baseURL = 'https://6521b5f3a4199548356d8138.mockapi.io';

export async function fetchContactsAll() {
  const { data } = await axios.get('/contacts');
  return data;
}
export async function removeContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function additionContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}
