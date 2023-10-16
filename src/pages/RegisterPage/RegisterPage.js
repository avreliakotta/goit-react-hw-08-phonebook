import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/thunks';
import css from './Regisrer.module.css';
export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className={css.RegisterPageTitle}>Registration page</h1>
      <form className={css.RegisterPageForm} onSubmit={handleSubmit}>
        <label className={css.Label}>
          Name
          <input
            type="text"
            name="name"
            className={css.RegisterInput}
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.Label}>
          Email
          <input
            type="email"
            name="email"
            className={css.RegisterInput}
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.Label}>
          Password
          <input
            type="password"
            name="password"
            className={css.RegisterInput}
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.RegisterButton}>
          SignUp
        </button>
      </form>
    </>
  );
};
