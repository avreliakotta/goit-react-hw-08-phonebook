import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/thunks';
import { selectIsLoading, selectError } from 'redux/selectors';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const defaultTheme = createTheme();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <ContactForm />
        <Filter />
        {isLoading && <CircularProgress />}

        {error && <p>{error.message}</p>}
        <ContactList />
      </Container>
    </ThemeProvider>
  );
};
export default ContactsPage;
