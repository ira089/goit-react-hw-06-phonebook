import { useState,useMemo } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({onSubmit}) => {

  const [name, setName]= useState('');
  const[number, setNumber]=useState('')

  const handleChangeName = ({ target }) => {
    const {  value } = target;
    // console.log(value);
    // console.log(name);
    setName(value)
  };  

  const handleChangeNumber = ({ target }) => {
    const {  value } = target;
    // console.log(value);
    // console.log(name);
    setNumber(value)
  };  

  const contactNameId = useMemo(() => nanoid(), []);
  const contactNumberId = useMemo(() => nanoid(), []);

  const handleSubmit = (evt )=> {
    evt.preventDefault();
    const { name, number} = evt.target;
onSubmit({name: name.value, number: number.value})
setName(''); setNumber('') 
  };

    return (
      <form onSubmit={handleSubmit} className={styles.formWrap}>
        <label htmlFor={contactNameId} className={styles.formItem}>
          Name
          <input
            onChange={handleChangeName}
            value={name}
            name="name"
            required
            id={contactNameId}
            placeholder="Name"
            type="text"
          ></input>
        </label>

        <label htmlFor={contactNumberId} className={styles.formItem}>
          Number
          <input
            onChange={handleChangeNumber}
            value={number}
            name="number"
            id={contactNumberId}
            placeholder="Number"
            required
          ></input>
        </label>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  
}

export default ContactForm;