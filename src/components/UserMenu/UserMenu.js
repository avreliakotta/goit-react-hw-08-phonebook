import { useSelector, useDispatch } from 'react-redux';
import { selectEmail } from '../../redux/selectors';
import { logout } from 'redux/thunks';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';

const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  return (
    <div className={css.UserMenuWrap}>
      <p>{email}</p>
      <Button
        type="button"
        variant="contained"
        // className={css.LogOutButton}
        onClick={() => dispatch(logout())}
      >
        LogOut
      </Button>
    </div>
  );
};
export default UserMenu;
