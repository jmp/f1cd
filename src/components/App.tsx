import React, {useEffect, useState} from 'react';
import {Header} from './Header';
import {RoundInfo} from './RoundInfo';
import {Season} from '../models/season';
import './App.css';

type AppProps = {
    season: Season,
    getDate: () => Date,
    updateInterval: number
}

function App({ season, getDate, updateInterval }: AppProps) {
    const [date, setDate] = useState(getDate());
    const round = season.findNextRound(date);

    useEffect(() => {
        const interval = setInterval(() => setDate(getDate()), updateInterval);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <>
        <Header />
        <RoundInfo round={round} date={date} />
    </>;
}

export default App;
