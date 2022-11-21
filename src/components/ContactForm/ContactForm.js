import { FieldLabel, Field, FieldInput, Button } from './ContactForm.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getContacts } from '../../redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const isExistContact = name => {
    return contacts.some(item => item.name === name);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (isExistContact(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    handleFormReset();
  };

  const handleFormReset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <form onSubmit={handleFormSubmit}>
      <Field>
        <FieldInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
          id={nameInputId}
        />
        <FieldLabel htmlFor={nameInputId}>Name</FieldLabel>
      </Field>
      <Field>
        <FieldInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
          id={numberInputId}
        />
        <FieldLabel htmlFor={numberInputId}>Number</FieldLabel>
      </Field>

      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;
