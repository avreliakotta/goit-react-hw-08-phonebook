import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/thunks';
import { selectIsLoading, selectError } from 'redux/selectors';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Phonebook</h1>

      <ContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      {isLoading && <b>Request in progress...</b>}
      {error && <p>{error.message}</p>}
      <ContactList />
    </div>
  );
};
