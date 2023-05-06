import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { selectContacts } from 'redux/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Blocks } from 'react-loader-spinner';
import css from '../components/Layout/Layout.module.css';

const ContactsPage = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn && (
        <>
          <h2>Contacts</h2>
          <ContactForm />
          <Filter />
          {isLoading && !error && (
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperClass={css.blocksWrapper}
            />
          )}
          {items.length > 0 && <ContactList />}
        </>
      )}
      ;
    </>
  );
};
export default ContactsPage;
