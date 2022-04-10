//import './ChatMessages.scss';
import { useRef, useEffect } from 'react';
import { AUTHORS } from '../assets/constants';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FaceRounded, LaptopRounded } from '@mui/icons-material';

const ChatMessages = (props) => {

  const messageListRef= useRef(null);
  useEffect(() => {
    if (messageListRef?.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    }}, [props.messageList]);

  return (
    <Box height="100%"
         overflow="auto">
      <List>
        { props.messageList.map(
            (el, idx, arr) => {
              const iconName = (el.author === AUTHORS.bot) ? <LaptopRounded /> : <FaceRounded />;
              return (
                <ListItem divider={ idx < (arr.length - 1) }
                          key={ el.timeStamp.toString() }>
                  <ListItemIcon>
                    { iconName }
                  </ListItemIcon>
                  <ListItemText primary={ el.text }
                                secondary={ new Date(el.timeStamp).toLocaleTimeString() } />
                </ListItem>
              );
            }
          )
        }
      </List>
    </Box>
  );
};

export default ChatMessages;
