import React, {useEffect, useState} from 'react';
import {FindNextSession} from './use-cases/find-next-session';
import {GetRemainingTime} from './use-cases/get-remaining-time';
import {FindNextRound} from './use-cases/find-next-round';
import {Round} from './models/round';

function App({ rounds }: { rounds: Round[] }) {
    const now = new Date();
    const nextRound = new FindNextRound(rounds).findNextRound(now);
    const nextSession = new FindNextSession(nextRound).findNextSession(now);
    const getRemainingTime = new GetRemainingTime();
    const [remainingTime, setRemainingTime] = useState(getRemainingTime.getRemainingTime(new Date(), nextSession.date));

    useEffect(() => {
        const interval = setInterval(() => setRemainingTime(getRemainingTime.getRemainingTime(new Date(), nextSession.date)), 1000);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h1>Countdown</h1>
            <h2 data-testid='round'>{nextRound.title}</h2>
            <h3>Sessions</h3>
            <ul>
            {
                nextRound.sessions.map(({title, date}) => {
                    return <li key={date.getTime()}>{date.toISOString().slice(0, 16).replace('T', ' ')}Z &ndash; {title}</li>;
                })
            }
            </ul>
            <p><b data-testid='session'>{nextSession.title}</b> starts in <b data-testid='countdown'>{remainingTime}</b>.</p>
            <p><a href='https://github.com/jmp/f1cd'>View the source on GitHub</a></p>
        </div>
    );
}

export default App;
