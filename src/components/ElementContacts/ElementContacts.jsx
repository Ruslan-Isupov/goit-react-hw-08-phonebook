import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from "./ElementContacts.module.css"
import { deleteContact } from 'redux/contacts/contactsOperations';
export const ElementContacts = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>{name}:</p>
      <p>{number}</p>
      <button className={css.buttonItem}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

ElementContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
