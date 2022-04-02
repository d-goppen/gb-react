import './App.scss';
import Message from './Message';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
      <Message greetData={ props } />
      </header>
    </div>
  );
}

export default App;
