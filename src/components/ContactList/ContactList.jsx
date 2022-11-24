import { List } from './ContactList.styled';
import Contact from '../Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </List>
  );
};

export default ContactList;
