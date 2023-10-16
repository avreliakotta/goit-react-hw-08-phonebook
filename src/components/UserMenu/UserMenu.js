import { useSelector, useDispatch } from 'react-redux';
import { selectEmail } from '../../redux/selectors';
import { logout } from 'redux/thunks';
import css from './UserMenu.module.css';
export const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  return (
    <div className={css.UserMenuWrap}>
      <p>{email}</p>
      <button
        type="button"
        className={css.LogOutButton}
        onClick={() => dispatch(logout())}
      >
        LogOut
      </button>
    </div>
  );
};
