import React, {useEffect, useState} from 'react';
import {Header} from './Header';
import {RoundInfo} from './RoundInfo';
import {Season} from '../models/season';
import './App.css';
import {RoundSelector} from './RoundSelector';
import {Clock} from '../models/clock';

type AppProps = {
    season: Season,
    clock: Clock,
    updateInterval: number
}

function App({ season, clock, updateInterval }: AppProps) {
    const [date, setDate] = useState(clock.getDate());
    const [round, setRound] = useState(season.findNextRound(clock.getDate()));

    useEffect(() => {
        const interval = setInterval(() => setDate(clock.getDate()), updateInterval);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <>
        <Header />
        <RoundSelector rounds={season.rounds} defaultRound={round} onSelect={setRound} />
        <RoundInfo round={round} date={date} key={round.title} />
    </>;
}

export default App;
