import React, {useState} from 'react';
import {Header} from './Header';
import {RoundInfo} from './RoundInfo';
import {RoundSelector} from './RoundSelector';
import {Season} from '../models/season';
import {Clock} from '../models/clock';
import './App.css';

type AppProps = {
    season: Season,
    clock: Clock
}

function App({ season, clock }: AppProps) {
    const [round, setRound] = useState(season.findNextRound(clock.getDate()));

    return <>
        <Header />
        <main>
            <RoundSelector rounds={season.rounds} defaultRound={round} onSelect={setRound} />
            <RoundInfo round={round} clock={clock} updateInterval={1000} key={round.title} />
        </main>
    </>;
}

export default App;
