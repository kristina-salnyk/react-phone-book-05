import { Container, Text, Image } from './Message.styled';
import PropTypes from 'prop-types';
import error from 'img/error.png';
import noResults from 'img/no-results.png';

const messageDescription = {
  error: {
    text: 'Something went wrong. Try again later',
    image: error,
  },
  noResults: {
    text: 'No contacts',
    image: noResults,
  },
};

const Message = ({ type }) => {
  const message = messageDescription[type];

  return (
    <Container>
      <Text>{message.text}</Text>
      <Image src={message.image} alt={message.text} />
    </Container>
  );
};

export default Message;

Message.propTypes = {
  type: PropTypes.string.isRequired,
};
