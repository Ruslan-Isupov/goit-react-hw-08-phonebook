import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export const UserMenu = () => {
  const { isLoggedIn, user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  // if (isLoggedIn === false) {
  //   return <Navigate to="/login" replace />;
  // }

  return (
    <div className={css.menuBox}>
      <p className={css.menuText}>{user.email}</p>
      <button className={css.menuButton} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
