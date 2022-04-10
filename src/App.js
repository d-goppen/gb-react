//import './App.scss';
import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Divider, Stack } from '@mui/material';
import Chat from './components/Chat';
import ChatsList from './components/ChatsList';
import { AUTHORS, ANSWER_DELAY } from './assets/constants';
import { getBotAnswer } from './assets/utils';

function App(props) {

  const theme = createTheme({
                  palette: {
                    mode: 'dark',
                    background: {
                      default: '#122424',
                    },
                  },
                });

  const [ messageList, setMessage ] = useState([]);

  const addMessage = (newMessage) => {
    setMessage(allMessages => [...allMessages, newMessage]);
  };

  const chatsList = [
    { id: 1001, name: 'Домашний' },
    { id: 1010, name: 'Рабочий' },
    { id: 1100, name: 'С мужиками' },
    { id: 1101, name: 'С девчатами' },
    { id: 1110, name: 'Личное' },
  ];

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

  return (
    <React.StrictMode>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Container width="md">
          <Stack height="100vh"
                 width="100%"
                 direction="row"
                 justifyContent="center"
                 alignItems="center"
                 padding={ 2 }
                 spacing={ 3 }
                 divider={<Divider orientation="vertical" flexItem />}>
            <ChatsList chatsList={ chatsList } />
            <Chat messageList={ messageList } addMessage={ addMessage }/>
          </Stack>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
