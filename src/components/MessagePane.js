import { useEffect, useState, useRef } from 'react';
import './MessagePane.scss';
import { AUTHORS } from '../assets/constants';

const MessagePane = (props) => {

  const [newMessage, setMessage] = useState('');
  const updateMessage = event => setMessage(event.target.value);

  const [isEmpty, setEmpty] = useState(true);
  useEffect(() => setEmpty(!newMessage), [newMessage]);

  const messageKeyDown = (event) => (!!newMessage && event.key === 'Enter') ? sendMessage() : true;

  const messageText = useRef(null);

  const sendMessage = () =>
    {
      props.addMessage(
        {
          'timeStamp': Date.now(),
          'author': AUTHORS.user,
          'text': newMessage,
        });
      setMessage('');
      messageText.current.focus();
    };

  return (
    <div className="message-pane">
      <input type="text"
             ref={ messageText }
             className="message-input"
             value={ newMessage }
             autoFocus
             onChange={ updateMessage }
             onKeyDown={ messageKeyDown }
      />
      <button className="send-button"
              onClick={ sendMessage }
              disabled={ isEmpty }
      >
        Отправить
      </button>
    </div>
  );
};

export default MessagePane;
