import React, {useState} from 'react';
import {SessionInfo} from './SessionInfo';
import {SessionList} from './SessionList';
import {Round} from '../models/round';

export function RoundInfo({round, date}: {round: Round; date: Date}) {
    const [session, setSession] = useState(round.findNextSession(date));
    return (
        <main data-testid='round-info'>
            <h2 data-testid='round-title'>{round.title}</h2>
            <SessionInfo session={session} date={date} />
            <SessionList {...{round, date, session, setSession}} />
        </main>
    );
}
