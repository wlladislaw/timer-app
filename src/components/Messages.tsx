import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/reducers/reducer';

const Messages: React.FC = () => {
  const messages = useSelector((state: State) => state.messages);

  return (
    <div>
      <h3>Messages:</h3>
      <div>
        {messages.map((message: string, index: number) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default Messages;
