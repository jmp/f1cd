import React, {useEffect, useState} from 'react';
import {FindNextSession} from '../use-cases/find-next-session';
import {GetRemainingTime} from '../use-cases/get-remaining-time';
import {FindNextRound} from '../use-cases/find-next-round';
import {Round} from '../models/round';
import {Footer} from './Footer';
import {SessionList} from './SessionList';
import './App.css';

type AppProps = {
    rounds: Round[],
    getDate: () => Date,
    updateInterval: number
}

function App({ rounds, getDate, updateInterval }: AppProps) {
    const nextRound = new FindNextRound(rounds).findNextRound(getDate());
    const nextSession = new FindNextSession(nextRound.sessions).findNextSession(getDate());
    const getRemainingTime = new GetRemainingTime();
    const [remainingTime, setRemainingTime] = useState(getRemainingTime.getRemainingTime(getDate(), nextSession.date));

    useEffect(() => {
        const interval = setInterval(() => setRemainingTime(getRemainingTime.getRemainingTime(getDate(), nextSession.date)), updateInterval);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h1>Countdown</h1>
            <h2 data-testid='round'>{nextRound.title}</h2>
            <SessionList sessions={nextRound.sessions} getDate={getDate} />
            <h3>Next Session</h3>
            <p><span data-testid='session'>{nextSession.title}</span> starts in <span data-testid='countdown'>{remainingTime}</span>.</p>
            <Footer />
        </div>
    );
}

export default App;
