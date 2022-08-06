import React, {useEffect, useState} from 'react';
import {FindNextSession} from '../use-cases/find-next-session';
import {FindNextRound} from '../use-cases/find-next-round';
import {Round} from '../models/round';
import {Footer} from './Footer';
import {Countdown} from './Countdown';
import {RoundInfo} from './RoundInfo';
import './App.css';

type AppProps = {
    rounds: Round[],
    getDate: () => Date,
    updateInterval: number
}

function App({ rounds, getDate, updateInterval }: AppProps) {
    const [date, setDate] = useState(getDate());
    const round = new FindNextRound(rounds).findNextRound(date);
    const session = new FindNextSession(round.sessions).findNextSession(date);

    useEffect(() => {
        const interval = setInterval(() => setDate(getDate()), updateInterval);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <>
        <h1>Countdown</h1>
        <RoundInfo round={round} date={date} />
        <Countdown session={session} date={date} />
        <Footer />
    </>;
}

export default App;