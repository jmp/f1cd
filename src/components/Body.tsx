import React, {useState} from 'react';
import {Season} from '../models/season';
import {SessionInfo} from './SessionInfo';
import {SessionList} from './SessionList';

type BodyProps = {
    season: Season;
    date: Date;
};

export function Body({ season, date }: BodyProps) {
    const round = season.findNextRound(date);
    const [session, setSession] = useState(round.findNextSession(date));
    return (
        <main data-testid='body'>
            <h2 data-testid='round-title'>{round.title}</h2>
            <SessionInfo session={session} date={date} />
            <SessionList {...{round, date, session, setSession}} />
        </main>
    );
}
