import { React, createContext, useContext, useReducer } from 'react';
import { CreateUUID } from './utils';
import { AUTHORS } from './constants';

const ChatsContext = createContext();

const initialChatsState = {
  chats: [
    { id: 'bd577f1e-c3db-4d3c-aac6-f04b97268e27', chatName: 'Домашний',
      messages: [
        {
          timeStamp: '1649644896302',
          author: AUTHORS.user,
          text: 'Сообщение 1',
        },
        {
          timeStamp: '1649644899080',
          author: AUTHORS.bot,
          text: 'Сообщение 2',
        },
      ] },
    { id: '2bb917dc-0a73-49bc-a277-d373dbfe121f', chatName: 'Рабочий', messages: [] },
    { id: '9514af74-86fa-48ce-a5b2-303b37cd171c', chatName: 'С мужиками', messages: [] },
    { id: 'a4bd3d96-760c-4785-b68a-235c3449f865', chatName: 'С девчатами', messages: [] },
    { id: 'd4c7120c-6d34-438c-9930-4af8270b02a7', chatName: 'Личное', messages: [] },
  ],

  getChat: function(chatId) {
    const chatIndex = this.chats.findIndex(el => el.id === chatId.toString());
    return chatIndex >= 0 ? this.chats[chatIndex] : undefined;
  },
};

export const chatsReducer = (state, action) => {

  switch (action.type) {
    case 'MESSAGE_ADD': {
      const chatIndex = state.chats.findIndex(el => el.id.toString() === action.messageInfo.chatId.toString());
      if (chatIndex >= 0) {
        return {
          chats: [ ...state.chats.slice(0, chatIndex),
                   { id: state.chats[chatIndex].id,
                     chatName: state.chats[chatIndex].chatName,
                     messages: [...state.chats[chatIndex].messages,
                                {
                                  timeStamp: action.messageInfo?.timeStamp.toString(),
                                  author: action.messageInfo.author,
                                  text: action.messageInfo.text,
                                }]
                    },
                    ...state.chats.slice(chatIndex + 1),
                  ],
            getChat: state.getChat,
        };
      } else {
        return state;
      };
    }

    case 'MESSAGE_DELETE': {
      console.log('Message deleted');
      return state;
    }

    case 'CHAT_ADD': {
      return { chats: [...state.chats, { id: CreateUUID(), chatName: action.chatName, messages: [] }],
               getChat: state.getChat };
    }

    case 'CHAT_DELETE': {
      return { chats: state.chats.filter(el => el.id !== action.chatId.toString()),
               getChat: state.getChat };
    }

    default:
      return state;
  };
};

export const ChatsProvider = ({ children }) => {
  const [chatsState, chatsDispatch] = useReducer(chatsReducer, initialChatsState);

  return (
    <ChatsContext.Provider value={{ chatsState, chatsDispatch }}>
      {children}
    </ChatsContext.Provider>
  );
};

export const useChatsContext = () => useContext(ChatsContext);
