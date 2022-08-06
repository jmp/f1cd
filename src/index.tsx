import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {rounds} from './data/session-data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App rounds={rounds} getDate={() => new Date()} updateInterval={1000} />
  </React.StrictMode>
);
