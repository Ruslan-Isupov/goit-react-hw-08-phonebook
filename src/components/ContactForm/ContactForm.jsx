import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import css from "./ContactForm.module.css"
import { addContact } from 'redux/contacts/contactsOperations';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleStateInput = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);

  const checkSameName = name => {
    return items?.find(item => item?.name === name);
  };

  const addContacts = e => {
    e.preventDefault();
    checkSameName(name) === undefined
      ? dispatch(addContact({ name, number }))
      : Notiflix.Notify.failure('You have already had this name!');;
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={addContacts}>
      <fieldset className={css.fieldSet}>
        <label htmlFor="inputName">Name </label>

        <input 
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleStateInput}
          id="inputName"
          required
        />

        <label htmlFor="inputNumber">Number</label>

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleStateInput}
          id="inputNumber"
          required
        />

        <button className={css.contactButton} type="submit">Add contact</button>
      </fieldset>
    </form>
  );
};
