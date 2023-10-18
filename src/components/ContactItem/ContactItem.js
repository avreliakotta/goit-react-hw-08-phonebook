import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/thunks';

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
        <Typography component="h6" variant="h6">
          {/* <span className={css.contact}> */}
          {name} : {number}
          {/* </span> */}
        </Typography>
      </ThemeProvider>
      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
