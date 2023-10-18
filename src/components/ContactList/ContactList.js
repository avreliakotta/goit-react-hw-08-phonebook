import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import { selectVisibleContacts } from 'redux/selectors';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ul>
            {filteredContacts &&
              filteredContacts.map(({ id, name, number }) => (
                <Box
                  key={id}
                  sx={{
                    marginBottom: 1,
                  }}
                >
                  <ContactItem name={name} number={number} id={id} />
                </Box>
              ))}
          </ul>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default ContactList;
