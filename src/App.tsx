import React, {useEffect, useState} from 'react';
import {FindNextSession} from './use-cases/find-next-session';
import {GetRemainingTime} from './use-cases/get-remaining-time';
import {FindNextRound} from './use-cases/find-next-round';
import {Round} from './models/round';

type AppProps = {
    rounds: Round[],
    getDate: () => Date
}

function App({ rounds, getDate }: AppProps) {
    const nextRound = new FindNextRound(rounds).findNextRound(getDate());
    const nextSession = new FindNextSession(nextRound).findNextSession(getDate());
    const sessionsBefore = nextRound.sessions.filter(({date}) => date.getTime() < nextSession.date.getTime());
    const sessionsAfter = nextRound.sessions.filter(({date}) => date.getTime() >= nextSession.date.getTime());
    const getRemainingTime = new GetRemainingTime();
    const [remainingTime, setRemainingTime] = useState(getRemainingTime.getRemainingTime(getDate(), nextSession.date));

    useEffect(() => {
        const interval = setInterval(() => setRemainingTime(getRemainingTime.getRemainingTime(getDate(), nextSession.date)), 1000);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h1>Countdown</h1>
            <h2 data-testid='round'>{nextRound.title}</h2>
            <h3>Sessions</h3>
            <ul>
                {
                    sessionsBefore.map(({title, date}) => (
                        <li key={date.getTime()}><del>{date.toISOString().slice(0, 16).replace('T', ' ')} UTC &ndash; {title}</del></li>
                    ))
                }
                {
                    sessionsAfter.map(({title, date}) => (
                        <li key={date.getTime()}>{date.toISOString().slice(0, 16).replace('T', ' ')} UTC &ndash; {title}</li>
                    ))
                }
            </ul>
            <h3>Next Session</h3>
            <p><b data-testid='session'>{nextSession.title}</b> starts in <b data-testid='countdown'>{remainingTime}</b>.</p>
            <p><a href='https://github.com/jmp/f1cd'>View the source on GitHub</a></p>
        </div>
    );
}

export default App;
