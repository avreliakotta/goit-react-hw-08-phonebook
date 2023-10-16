import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/thunks';

import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <span className={css.contact}>
        {name} : {number}
      </span>
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
