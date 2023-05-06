import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  const { state } = useLocation();

  return !isLoggedIn ? children : <Navigate to={state ? state : '/contacts'} />;
};
