import { useSelector } from 'react-redux';
import { ElementContacts } from 'components/ElementContacts/ElementContacts';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const { items } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContactList = items?.filter(item =>
    item.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactLis}>
      {filterContactList &&
        filterContactList.map(contact => {
          return (
            <li className={css.contactItem} key={contact.id}>
              <ElementContacts
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          );
        })}
    </ul>
  );
};
