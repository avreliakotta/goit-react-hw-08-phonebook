import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';
const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { state } = useLocation();
  return !isLoggedIn ? children : <Navigate to={state ? state : '/'} />;
};
export default PublicRoute;
