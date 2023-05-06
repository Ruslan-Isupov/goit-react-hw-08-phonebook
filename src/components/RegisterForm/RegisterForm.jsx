import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css'
import { useSelector } from "react-redux";
import { selectAuth } from "redux/selectors";
import { Navigate } from 'react-router-dom';

export const RegisterForm = () => {
     const dispatch = useDispatch();
     const {isLoggedIn} = useSelector(selectAuth)
  
  const handleSubmit = e => {
  const form = e.currentTarget;
    e.preventDefault();
   
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
      );
    form.reset()
    if (isLoggedIn) {
         console.log(isLoggedIn)
         return <Navigate to="/contacts" replace />
      };
  };
    return (
        <form className ={css.registerForm} onSubmit={handleSubmit} autoComplete="off">
      <label >
        Username
        <input  className={css.registerInput} type="text" name="name" />
      </label>
      <label >
        Email
        <input className={css.registerInput} type="email" name="email" />
      </label>
      <label >
        Password
        <input className={css.registerInput} type="password" name="password" />
      </label>
      <button className={css.registerButton} type="submit">Register</button>
    </form>
    )
}