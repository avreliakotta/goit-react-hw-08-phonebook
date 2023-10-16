import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
// import { selectIsLoading, selectError } from 'redux/selectors';
import { Home } from '../../pages/Home/Home';
import { RegisterPage } from '../../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import css from './App.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import { currentUser } from '../../redux/thunks';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <div className={css.Container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<div>NotFound </div>} />
      </Routes>
    </div>

    // <div className={css.container}>
    //   <h1 className={css.mainTitle}>Phonebook</h1>

    //   <ContactForm />
    //   <h2 className={css.contactsTitle}>Contacts</h2>
    //   <Filter />
    //   {isLoading && <b>Request in progress...</b>}
    //   {error && <p>{error.message}</p>}
    //   <ContactList />
    // </div>
  );
};
