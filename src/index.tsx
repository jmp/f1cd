import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {season} from './data/season-data';
import {Clock} from './models/clock';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App season={season} clock={new Clock()} updateInterval={1000} />
    </React.StrictMode>
);
