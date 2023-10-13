import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from '../../redux/thunks';
import { selectIsLoading, selectError } from 'redux/selectors';
import css from './App.module.css';

export const App = () => {
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
