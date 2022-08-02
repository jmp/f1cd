import React, {useEffect, useState} from 'react';
import {Countdown} from './domain/countdown';
import {Formatter} from './domain/formatter';
import {mapSessionDataToRounds} from './data/session-data-mapping';
import sessionData from './data/sessions.json';
import {FindNextSession} from './domain/use-cases/find-next-session';

function App() {
    const now = new Date();
    const formatter = new Formatter();
    const rounds = mapSessionDataToRounds(sessionData);
    const nextSession = new FindNextSession(rounds).findNextSession(now);
    const createCountdown = () => new Countdown(new Date(), nextSession.date, formatter);
    const [countdown, setCountdown] = useState(createCountdown());

    useEffect(() => {
        const interval = setInterval(() => setCountdown(createCountdown()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Countdown</h1>
            <h2 data-testid='round'>{nextSession.roundTitle}</h2>
            <p><b data-testid='session'>{nextSession.sessionTitle}</b> starts in <b data-testid='countdown'>{countdown.format()}</b>.</p>
            <p><a href='https://github.com/jmp/f1cd'>View the source on GitHub</a></p>
        </div>
    );
}

export default App;
