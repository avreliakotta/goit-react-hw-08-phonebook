import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';
const AuthNav = () => {
  return (
    <ul className={css.AuthNavList}>
      <li>
        <NavLink to="/register" className={css.link}>
          SignUp
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={css.link}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};
export default AuthNav;
