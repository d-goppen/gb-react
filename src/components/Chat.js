//import './Chat.scss';
import ChatMessages from './ChatMessages';
import MessagePane from './MessagePane';
import { Stack, Divider } from '@mui/material';

const Chat = (props) => {
  const { messageList, addMessage } = props;


  return (
    <Stack spacing={ 1 }
           divider={ <Divider orientation="horizontal" flexItem /> }
           width="100%"
           height="100%">
      <ChatMessages messageList={ messageList } />
      <MessagePane addMessage={ addMessage } />
    </Stack>
  );
};

export default Chat;
