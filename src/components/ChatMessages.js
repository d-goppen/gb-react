import { useRef, useEffect } from 'react';
import { AUTHORS } from '../assets/constants';
import './ChatMessages.scss';

const ChatMessages = (props) => {

  const messageListRef= useRef(null);
  useEffect(() => {
    if (messageListRef?.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    }}, [props.messageList]);

  return (
    <div className="messages-list"
         ref={ messageListRef }>
      { props.messageList.map(
          el => {
            return (
              <div key={ el.timeStamp.toString() }
                   className={ 'message-container ' + (el.author === AUTHORS.bot ? 'bot-filled' : 'user-filled' )}>
                <div className="message-header">
                  <div className="message-header_author">{ el.author }</div>
                  <div className="message-header_timestamp">
                    { new Date(el.timeStamp).toLocaleTimeString() }
                  </div>
                </div>
                <div className="message-text">{ el.text }</div>
              </div>
            );
          }
        )
      }
    </div>
  );
};

export default ChatMessages;
