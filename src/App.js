//import './App.scss';
import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Router from './pages/Router';
import { ChatsProvider } from './assets/ChatsProvider';

function App(props) {
  // Список чатов вынес в chatsObject и использую через context,
  // т.к. иначе при переходах по роутам чаты обнуляются.

  const theme = createTheme({
                  palette: {
                    mode: 'dark',
                    background: {
                      default: '#122424',
                    },
                  },
                });

  return (
    <React.StrictMode>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Container width="md">
          <ChatsProvider>
            <Router />
          </ChatsProvider>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
