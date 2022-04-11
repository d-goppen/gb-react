import { Divider, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import ChatsList from '../components/ChatsList';
import Chat from '../components/Chat';

const Chats = (props) => {
  const { chatId } = useParams();

  return(
    <Stack height="100%"
           width="100%"
           direction="row"
           justifyContent="center"
           alignItems="center"
           padding={ 2 }
           spacing={ 3 }
           divider={<Divider orientation="vertical" flexItem />}>
      <ChatsList activeChatId={ chatId } />
      <Chat activeChatId={ chatId }/>
    </Stack>
  );
};

export default Chats;
