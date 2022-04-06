import { useEffect, useState } from 'react';
import './App.scss';
import Chat from './components/Chat';
import { AUTHORS, ANSWER_DELAY } from './assets/constants';
import { getBotAnswer } from './assets/utils';

function App(props) {

  const [ messageList, setMessage ] = useState([]);

  const addMessage = (newMessage) => {
    setMessage(allMessages => [...allMessages, newMessage]);
  };

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author === AUTHORS.user) {
    let answerTimeout = setTimeout(
      () => addMessage(getBotAnswer()),
      ANSWER_DELAY.min + Math.random() * (ANSWER_DELAY.max - ANSWER_DELAY.min)
    );
    console.log('Timeout was set: ', answerTimeout);

    return (() => {
      /*  Закомментировал clearTimeout по следующей причине:
          при отправке сообщения происходит обновление messageList,
          это влечёт за собой обновление компонента (в данном случае App),
          и т.к. происходит unmount компонента, вызывается clearTimeout.
          Вроде так и должно быть, но если отправить новое сообщение
          до того, как бот успел ответить на предыдущее, то генераци ответа бота
          на предыдущее отменяется.
          Как решить проблему пока не придумал (3 урок пока не смотрел).
      */
      // clearTimeout(answerTimeout)
    });
    };
  }, [messageList]);

  return (
    <div className="App">
      <Chat messageList={ messageList } addMessage={ addMessage }/>
    </div>
  );
}

export default App;
