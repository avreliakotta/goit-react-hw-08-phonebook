import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/thunks';
import { Button } from '@mui/material';
import css from './ContactItem.module.css';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const defaultTheme = createTheme();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <ThemeProvider theme={defaultTheme}>
        <Typography component="h3" variant="h6">
          {name} : {number}
        </Typography>
      </ThemeProvider>
      <Button
        type="button"
        onClick={() => handleDeleteContact(id)}
        variant="contained"
        // className={css.deleteButton}
      >
        Delete
      </Button>
    </li>
  );
};
export default ContactItem;
