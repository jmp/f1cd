import React, {useEffect, useState} from 'react';
import {Header} from './Header';
import {RoundInfo} from './RoundInfo';
import {Season} from '../models/season';
import './App.css';
import {RoundSelector} from './RoundSelector';

type AppProps = {
    season: Season,
    getDate: () => Date,
    updateInterval: number
}

function App({ season, getDate, updateInterval }: AppProps) {
    const [date, setDate] = useState(getDate());
    const [round, setRound] = useState(season.findNextRound(getDate()));

    useEffect(() => {
        const interval = setInterval(() => setDate(getDate()), updateInterval);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <>
        <Header />
        <RoundSelector rounds={season.rounds} defaultRound={round} onSelect={setRound} />
        <RoundInfo round={round} date={date} key={round.title} />
    </>;
}

export default App;
