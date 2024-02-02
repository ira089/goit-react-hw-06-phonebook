import { useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import ContactItems from '../ContactItems/ContactItems';

const ContactList = () => {
  const items = useSelector(state => state.contacts.contacts);
  console.log(items);

  const elements = items.map(item => (
    <ContactItems
      key={item.id}
      id={item.id}
      number={item.number}
      name={item.name}
      // deleteContact={deleteContact}
    />
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default ContactList;
