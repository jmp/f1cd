import {RoundInfo} from './RoundInfo';
import React from 'react';
import {Season} from '../models/season';
import {SessionInfo} from './SessionInfo';

export function Body({ season, date }: { season: Season, date: Date }) {
    const round = season.findNextRound(date);
    const session = round.findNextSession(date);
    return (
        <main data-testid='body' id='body'>
            <RoundInfo round={round} date={date} />
            <SessionInfo session={session} date={date} />
        </main>
    );
}
