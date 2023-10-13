import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectVisibleContacts } from 'redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} name={name} phone={phone} id={id} />
        ))}
    </ul>
  );
};
