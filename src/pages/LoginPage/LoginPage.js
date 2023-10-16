import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/thunks';
import css from './LoginPage.module.css';
export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className={css.LoginPageTitle}>Login page</h1>
      <form className={css.LoginForm} onSubmit={handleSubmit}>
        <label className={css.Label}>
          Email
          <input
            type="email"
            name="email"
            className={css.LoginInput}
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.Label}>
          Password
          <input
            type="password"
            name="password"
            className={css.LoginInput}
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.LoginButton}>
          Log in
        </button>
      </form>
    </>
  );
};
