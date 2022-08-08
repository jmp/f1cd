import React, {useState} from 'react';
import {SessionInfo} from './SessionInfo';
import {SessionList} from './SessionList';
import {Round} from '../models/round';
import './RoundInfo.css';

export function RoundInfo({round, date}: {round: Round; date: Date}) {
    const [session, setSession] = useState(round.findNextSession(date));
    return (
        <main data-testid='round-info'>
            <SessionInfo session={session} date={date} />
            <SessionList {...{round, date, session, setSession}} />
        </main>
    );
}
