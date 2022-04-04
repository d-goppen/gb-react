import './Chat.scss';
import ChatMessages from './ChatMessages';
import MessagePane from './MessagePane';

const Chat = (props) => {
  const { messageList, addMessage } = props;

  return (
    <div className="chat-container">
      <ChatMessages messageList={ messageList } />
      <MessagePane addMessage={ addMessage } />
    </div>
  );
};

export default Chat;
