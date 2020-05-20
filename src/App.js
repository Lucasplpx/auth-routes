import React from 'react';
import './global.css';
import { ContextAuth } from './contexts/auth';
import Routes from './routes';

function App() {
  return (
  <div className="app">
    <ContextAuth>
      <Routes />
    </ContextAuth>
  </div>
  );
}

export default App;
