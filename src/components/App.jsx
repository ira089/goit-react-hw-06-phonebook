import { useState, useEffect, useRef } from 'react';
import styles from './ContactForm/ContactForm.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './ContactList/Filter';
import contactExample from '../redux/constants';

// const LS_Key_Contact = 'phoneContact';

export const App = () => {
  const [contacts, setCotacts] = useState(contactExample);
  // const dispatch = useDispatch();
  // const addTask = () => dispatch(addContact({ contacts }));
  const [filter, setFilter] = useState('');

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   const contactsData = localStorage.getItem(LS_Key_Contact);
  //   if (contactsData) {
  //     setCotacts(JSON.parse(contactsData));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!firstRender.current) {
  //     // console.log(firstRender.current)
  //     localStorage.setItem(LS_Key_Contact, JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // useEffect(() => {
  //   firstRender.current = false;
  // }, []);

  const filterContacts = evt => {
    setFilter(evt.target.value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <div className={styles.wrap}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter value={filter} changeFitler={filterContacts} />
      <ContactList />
    </div>
  );
};
