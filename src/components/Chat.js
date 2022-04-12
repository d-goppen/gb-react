//import './Chat.scss';
import { useEffect, useState } from 'react';
import { Alert, Stack, Divider } from '@mui/material';
import { AUTHORS, ANSWER_DELAY } from '../assets/constants';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ChatMessages from './ChatMessages';
import AddNewInput from './AddNewInput';
import { useChatsContext } from '../assets/ChatsProvider';
import { getBotAnswer } from '../assets/utils';

const ErrorMessage = (chatId) => {
  const messageType = (chatId === undefined) ? 'info' : 'error';
  const messageText = (chatId === undefined) ?
                      'Chat not selected, choose one please.' :
                      `Chat with id ${chatId} not found`;

  return (
    <Alert variant="outlined" severity={ messageType }>
      { messageText }
    </Alert>
  );
};

const Messages = (activeChat, addMessageCallback) => {
  return (
    <>
      <ChatMessages messageList={ activeChat.messages } />
      <AddNewInput pushText={ addMessageCallback }
                   placeholder="Сообщение вводится тут"
                   autofocus={ true }>
        <SendRoundedIcon />
      </AddNewInput>
    </>
  );
};

const Chat = (props) => {
  const { activeChatId } = props;
  const { chatsState, chatsDispatch } = useChatsContext();
  const messageList = chatsState.getChat(activeChatId)?.messages;

  const addMessage = (messageData) => {
    chatsDispatch({ type: 'MESSAGE_ADD',
                    messageInfo: { chatId: activeChatId,
                                   timeStamp: messageData.timeStamp,
                                   author: messageData.author,
                                   text: messageData.text, },
                  });
  };

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author === AUTHORS.user) {
    let answerTimeout = setTimeout(
      () => addMessage(getBotAnswer()),
      ANSWER_DELAY.min + Math.random() * (ANSWER_DELAY.max - ANSWER_DELAY.min)
    );

    return (() => {
      clearTimeout(answerTimeout)
    });
    };
  }, [messageList]);


  const chatBox = (activeChatId === undefined || !Array.isArray(chatsState.getChat(activeChatId)?.messages)) ?
                  ErrorMessage(activeChatId) :
                  Messages(chatsState.getChat(activeChatId), addMessage);

  return (
    <Stack spacing={ 1 }
           divider={ <Divider orientation="horizontal" flexItem /> }
           width="100%"
           height="100%">
      { chatBox }
    </Stack>
  );
};

export default Chat;
