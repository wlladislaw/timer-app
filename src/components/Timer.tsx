import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimer, clearMessages } from '../redux/actions/actions';
import { Button } from './Button';

const Timer: React.FC = () => {
  const dispatch = useDispatch();

  const handleToggleTimer = () => {
    dispatch(toggleTimer());
  };

  const handleClearMessages = () => {
    dispatch(clearMessages());
  };

  return (
    <>
      <Button onClick={handleToggleTimer} />
      <Button onClick={handleClearMessages}>Clear Messages</Button>
    </>
  );
};

export default Timer;
