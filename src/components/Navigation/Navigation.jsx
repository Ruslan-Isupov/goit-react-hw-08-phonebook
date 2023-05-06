import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <nav>
      <ul className={css.navList}>
        <div className={css.boxNav}>
          <li>
            <NavLink className={css.linkNav} to="/">
              Home
            </NavLink>
          </li>

          {isLoggedIn && (
            <li>
              <NavLink className={css.linkNav} to="/contacts">
                Contacts
              </NavLink>
            </li>
          )}
        </div>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div className={css.boxNav}>
            <li>
              <NavLink className={css.linkNav} to="/register">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className={css.linkNav} to="/login">
                Log In
              </NavLink>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};
