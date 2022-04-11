//import './MessagePane.scss';
import { useEffect, useState, useRef } from 'react';
import { Stack, Input, IconButton } from '@mui/material';

const AddNewInput = ({ children, pushText, placeholder = 'Введите текст', autofocus = false }) => {

  const [newText, setNewText] = useState('');
  const updateText = event => setNewText(event.target.value);

  const [isEmpty, setEmpty] = useState(true);
  useEffect(() => setEmpty(!newText), [newText]);

  const inputKeyDown = (event) => (!isEmpty && event.key === 'Enter') ? pushNewText() : true;

  const textInput = useRef(null);

  const pushNewText = () =>
    {
      pushText ?
      pushText(
        {
          'timeStamp': Date.now(),
          'text': newText,
        }) : console.log('Text push stub.');
      setNewText('');
      textInput.current.focus();
    };

  return (
    <Stack direction="row"
           spacing={ 1 }>
      <Input inputRef={ textInput }
             variant="standard"
             placeholder={ placeholder }
             autoFocus={ autofocus }
             fullWidth={ true }
             value={ newText }
             onChange={ updateText }
             onKeyDown={ inputKeyDown }
      />
      <IconButton color="primary"
                  disabled={ isEmpty }
                  onClick={ pushNewText }>
        { children }
      </IconButton>
    </Stack>
  );
};

export default AddNewInput;
