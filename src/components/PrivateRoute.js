import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  const location = useLocation();
  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};
