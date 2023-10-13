import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';
import { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/thunks';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const nameId = nanoid();
  const phoneId = nanoid();

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
      phone,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.addContactForm}>
      <label className={css.label}>
        Name
        <input
          id={nameId}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className={css.formInput}
        />
      </label>
      <label className={css.label}>
        <input
          id={phoneId}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          className={css.formInput}
        />
      </label>
      <button type="submit" className={css.addContactButton}>
        Add contact
      </button>
    </form>
  );
};
