import './Message.scss';

const Mesasage = (props) => {
  const greetClass = props.greetData.greetClass ? props.greetData.greetClass : 'greet-welcome';

  return <div className={ greetClass }>{ `${props.greetData.greeting}, ${props.greetData.userName}!` }</div>
};

export default Mesasage;
