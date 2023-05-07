import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";
import css from './LoginForm.module.css'

export const LoginForm = () => {
      
    const dispatch = useDispatch();
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
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