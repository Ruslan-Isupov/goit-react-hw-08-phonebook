import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';


export const UserMenu = () => {
  const {  user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };


  return (
    <div className={css.menuBox}>
      <p className={css.menuText}>{user.email}</p>
      <button className={css.menuButton} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
