import { NavLink } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Stack } from '@mui/material';

const NavMenu = (props) => {
  const theme = useTheme();

  const activeStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? theme.palette.primary.light : theme.palette.primary.dark,
    };
  }
  return (
    <Stack component="nav"
           direction="row"
           width="100%"
           justifyContent="center"
           alignItems="center"
           spacing={ 3 }
           padding={ 2 }>
      <NavLink to="/" style={ activeStyle }>Home</NavLink>
      <NavLink to="/chats" style={ activeStyle }>Chats</NavLink>
      <NavLink to="/profile" style={ activeStyle }>Profile</NavLink>
    </Stack>
  );
};

export default NavMenu;