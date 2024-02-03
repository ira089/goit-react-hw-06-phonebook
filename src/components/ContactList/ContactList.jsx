import { useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import ContactItems from '../ContactItems/ContactItems';

const ContactList = () => {
  const contactsState = useSelector(state => state.contacts.contacts);
  console.log(contactsState);

  const filterState = useSelector(state => state.filter);
  console.log(filterState);

  const getFilteredContacts = () => {
    if (!filterState) {
      return contactsState;
    }
    const normalizedFilter = filterState.toLowerCase();
    return contactsState.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const items = getFilteredContacts();

  const elements = items.map(item => (
    <ContactItems
      key={item.id}
      id={item.id}
      number={item.number}
      name={item.name}
    />
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default ContactList;
