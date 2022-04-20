import store  from '../store';
import { useCallback, useState } from 'react';
import { changeVisible } from '../store/profile/actions';
import { Checkbox, FormControlLabel, Stack } from '@mui/material';

const Profile = () => {
  const { showName, name } = store.getState();
  const dispatch = store.dispatch;
  const [, setDummy] = useState();

  const setShowName = useCallback(() => {
    dispatch(changeVisible);
    setDummy({});
  }, [dispatch])

  return(
    <Stack height="100%"
           width="100%"
           justifyContent="center"
           alignItems="center">
      <h1>Profile { showName && <span> of { name }</span> }</h1>
      <FormControlLabel control={<Checkbox onChange={ setShowName }/>} label="Show name" />
    </Stack>
  );
};

export default Profile;
