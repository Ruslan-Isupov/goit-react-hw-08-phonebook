import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css'



export const RegisterForm = () => {
     const dispatch = useDispatch();
    
  
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