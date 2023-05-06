import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";
import css from './LoginForm.module.css'
import { useSelector } from "react-redux";
import { selectAuth } from "redux/selectors";
import { Navigate } from 'react-router-dom';

export const LoginForm = () => {
      
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(selectAuth)
    const handleSubmit = e => {
      e.preventDefault();
      console.log("працює на submit")
const form = e.currentTarget
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  if (isLoggedIn) {
         return <Navigate to="/contacts" replace />
      };
    return (
         <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input className={css.loginInput} type="email" name="email" />
      </label>
      <label>
        Password
        <input className={css.loginInput} type="password" name="password" />
      </label>
      <button className={css.loginButton} type="submit">
      Log in
      </button>
    </form>
    )
}