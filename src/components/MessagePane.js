//import './MessagePane.scss';
import { useEffect, useState, useRef } from 'react';
import { AUTHORS } from '../assets/constants';
import { Stack, Input, IconButton } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const MessagePane = (props) => {

  const [newMessage, setMessage] = useState('');
  const updateMessage = event => setMessage(event.target.value);

  const [isEmpty, setEmpty] = useState(true);
  useEffect(() => setEmpty(!newMessage), [newMessage]);

  const messageKeyDown = (event) => (!isEmpty && event.key === 'Enter') ? sendMessage() : true;

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
    <Stack direction="row"
           spacing={ 1 }>
      <Input inputRef={ messageText }
             variant="standard"
             placeholder="Сообщение вводится тут"
             autoFocus={ true }
             fullWidth={ true }
             value={ newMessage }
             onChange={ updateMessage }
             onKeyDown={ messageKeyDown }
      />
      <IconButton color="primary"
                  disabled={ isEmpty }
                  onClick={ sendMessage }>
        <SendRoundedIcon />
      </IconButton>
    </Stack>
  );
};

export default MessagePane;
