import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export const Navigation = () => {
  return (
    <>
      <ul className={css.NavList}>
        <li>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </>
  );
};
