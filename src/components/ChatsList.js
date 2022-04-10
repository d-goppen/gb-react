import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const ChatsList = (props) => {

  return (
    <Box width="25%" height="100%">
      <List>
        { props.chatsList.map(
            (el, idx, arr) => {
              return (
                <ListItem divider={ idx < (arr.length - 1) }
                          key={ el.id.toString() }>
                  <ListItemText primary={ el.name } />
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