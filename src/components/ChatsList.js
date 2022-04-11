import './ChatsList.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AddNewInput from './AddNewInput';
import { useChatsContext } from '../assets/ChatsProvider';

const ChatsList = (props) => {
  const { activeChatId } = props;
  const { chatsState, chatsDispatch } = useChatsContext();

  const deleteChat = (chatId, activeChat) => {
    let result = activeChat;

    if (chatId.toString() === activeChat.toString()) {
      const chatIndex = chatsState.chats.findIndex(el => el.id === chatId.toString());

      if (chatIndex === chatsState.chats.length - 1) {
        result = chatsState.chats.length > 1 ? chatsState.chats[chatIndex - 1].id : '';
      } else {
        result = chatsState.chats[chatIndex + 1].id;
      };
    };

    chatsDispatch({ type: 'CHAT_DELETE', chatId: chatId.toString() });
    return result.toString();
  };

  const addChat = (chatData) => {
    chatsDispatch({ type: 'CHAT_ADD', chatName: chatData.text });
  };

  let navigateTo = useNavigate();

  return (
    <Box width="25%" height="100%">
      <AddNewInput pushText={ addChat }>
        <AddCircleOutlineRoundedIcon />
      </AddNewInput>
      <List>
        { chatsState.chats.map(
            (el, idx, arr) => {
              return (
                <ListItem divider={ idx < (arr.length - 1) }
                          key={ el.id }
                          onClick={ () => { navigateTo(`/chats/${el.id}`); }}
                          className={ `chat-bookmark ${activeChatId === el.id ? 'active' : ''}` }
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete"
                                        onClick={ (event) => { event.stopPropagation();
                                                               navigateTo(`/chats/${deleteChat(el.id, activeChatId)}`);}
                                                }>
                              <DeleteForeverRoundedIcon />
                            </IconButton>
                          }>
                  <ListItemText primary={ el.chatName } />
                </ListItem>
              );
            }
          )
        }
      </List>
    </Box>
  );
}

export default ChatsList;