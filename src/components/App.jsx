import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import { Title } from './App.styled';
import { getError, getIsLoading, getVisibleContacts } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from '../redux/operations';
import getMessageType from '../utils/getMessageType';
import Loader from './Loader';
import Message from './Message';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const params = {
    hasError: error,
    hasResults: contacts.length > 0,
  };
  const messageType = getMessageType(params);

  return (
    <Box
      p="30px 40px"
      bg="white"
      width="450px"
      m="10px auto"
      display="grid"
      gridGap="30px"
      boxShadow={'var(--primary-box-shadow)'}
    >
      <Box display="grid" gridGap="10px">
        <Title as="h1">Phonebook</Title>
        <ContactForm />
      </Box>

      <Box display="grid" gridGap="10px">
        <Title>Contacts</Title>
        <Filter />
        {contacts.length > 0 && <ContactList />}

        {isLoading && contacts.length === 0 && <Loader />}

        {!isLoading && messageType && <Message type={messageType} />}
      </Box>
    </Box>
  );
};
