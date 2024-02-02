import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactClice';
// import { nanoid } from 'nanoid';
import styles from './ContactForm/ContactForm.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './ContactList/Filter';

const LS_Key_Contact = 'phoneContact';

const contactExample = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setCotacts] = useState(contactExample);
  const dispatch = useDispatch();
  const addTask = () => dispatch(addContact(contacts));
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

  const isDublicate = evt => {
    // console.log(evt)
    const normalizedName = evt.name.toLowerCase();
    // console.log(normalizedName);
    const dublicate = contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );
    return dublicate;
  };

  // const addContact = contact => {
  //   // console.log(isDublicate(contact))
  //   if (isDublicate(contact)) {
  //     return alert(`${contact.name} is already in contacts`);
  //   }
  //   setCotacts(prevContact => {
  //     const newContact = {
  //       id: nanoid(),
  //       ...contact,
  //     };
  //     return [...prevContact, newContact];
  //   });
  // };

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

  const deleteContact = id => {
    // console.log(contacts)
    // const newContacts = contacts.filter(contact => contact.id !== id);
    // return setCotacts(newContacts);
  };

  const visibleContacts = getFilteredContacts();

  return (
    <div className={styles.wrap}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addTask} />

      <h2>Contacts</h2>
      <Filter value={filter} changeFitler={filterContacts} />
      <ContactList />
    </div>
  );
};
