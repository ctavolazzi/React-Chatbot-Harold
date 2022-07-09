import React from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';

import actionProvider from './actionProvider';
import messageParser from './messageParser';
import config from './config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={actionProvider} messageParser={messageParser} />
      </header>
    </div>
  );
}

export default App;