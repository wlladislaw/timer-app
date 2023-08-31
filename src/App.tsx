import React from 'react';
import { Provider } from 'react-redux';
import Timer from './components/Timer';
import './App.css';
import store from './redux/store';
import Messages from './components/Messages';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Timer App</h1>
        <Timer />
        <Messages/>
      </div>
    </Provider>
  );
};

export default App;
