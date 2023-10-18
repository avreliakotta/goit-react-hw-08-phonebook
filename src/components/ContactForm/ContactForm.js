import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';
import { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/thunks';

import { Typography, TextField, Button } from '@mui/material';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const defaultTheme = createTheme();
  const dispatch = useDispatch();
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const isContactExists =
      contacts.entities &&
      contacts.entities.find(entity => entity.name === name);
    if (isContactExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      createdAt: new Date().toISOString(),
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Phonebook
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              type="name"
              name="name"
              value={name}
              id={nameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id={numberId}
              label="Number"
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              onChange={handleChange}
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contacts
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default ContactForm;
