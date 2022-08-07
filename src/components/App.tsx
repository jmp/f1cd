import React, {useEffect, useState} from 'react';
import {FindNextSession} from '../use-cases/find-next-session';
import {FindNextRound} from '../use-cases/find-next-round';
import {Round} from '../models/round';
import {Header} from './Header';
import {Footer} from './Footer';
import {RoundInfo} from './RoundInfo';
import {SessionInfo} from './SessionInfo';
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
        <Header />
        <RoundInfo round={round} date={date} />
        <SessionInfo session={session} date={date} />
        <Footer />
    </>;
}

export default App;
