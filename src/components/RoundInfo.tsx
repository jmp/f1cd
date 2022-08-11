import React, {useEffect, useState} from 'react';
import {SessionInfo} from './SessionInfo';
import {SessionList} from './SessionList';
import {Round} from '../models/round';
import {Clock} from '../models/clock';
import './RoundInfo.css';

type RoundInfoProps = {
    round: Round;
    clock: Clock;
    updateInterval: number;
};

export function RoundInfo({round, clock, updateInterval}: RoundInfoProps) {
    const [date, setDate] = useState(clock.getDate());
    const [session, setSession] = useState(round.findNextSession(date));

    useEffect(() => {
        const interval = setInterval(() => setDate(clock.getDate()), updateInterval);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main data-testid='round-info'>
            <SessionInfo session={session} date={date} />
            <SessionList {...{round, date, session, setSession}} />
        </main>
    );
}
