import React, {useEffect, useState} from 'react';
import {FindNextSession} from '../use-cases/find-next-session';
import {FindNextRound} from '../use-cases/find-next-round';
import {Round} from '../models/round';
import {Footer} from './Footer';
import {SessionList} from './SessionList';
import {Countdown} from './Countdown';
import './App.css';

type AppProps = {
    rounds: Round[],
    getDate: () => Date,
    updateInterval: number
}

function App({ rounds, getDate, updateInterval }: AppProps) {
    const currentDate = getDate();
    const nextRound = new FindNextRound(rounds).findNextRound(currentDate);
    const nextSession = new FindNextSession(nextRound.sessions).findNextSession(currentDate);
    const [date, setDate] = useState(currentDate);

    useEffect(() => {
        const interval = setInterval(() => setDate(getDate()), updateInterval);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <>
        <h1>Countdown</h1>
        <h2 data-testid='round'>{nextRound.title}</h2>
        <SessionList sessions={nextRound.sessions} date={getDate()} />
        <Countdown session={nextSession} date={date} />
        <Footer />
    </>;
}

export default App;
