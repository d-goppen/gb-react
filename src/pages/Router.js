import { Divider, Stack } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from '../components/NavMenu';
import Home from './Home';
import Chats from './Chats';
import Profile from './Profile';
import Page404 from './Page404';

const Router = (props) => {

  return (
    <BrowserRouter>
      <Stack height="100vh"
             width="100%"
             justifyContent="center"
             alignItems="center"
             padding={ 2 }
             divider={<Divider orientation="horizontal" flexItem />}>
        <NavMenu />
        <Stack height="100%"
               width="100%"
               justifyContent="center"
               alignItems="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="chats" element={ <Chats /> }>
              <Route path=":chatId" element={<Chats />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Stack>
      </Stack>
    </BrowserRouter>
  );
};

export default Router;