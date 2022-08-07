import React, {useState} from 'react';
import {Season} from '../models/season';
import {RoundInfo} from './RoundInfo';
import {SessionInfo} from './SessionInfo';

type BodyProps = {
    season: Season;
    date: Date;
};

export function Body({ season, date }: BodyProps) {
    const round = season.findNextRound(date);
    const [session, setSession] = useState(round.findNextSession(date));
    return (
        <main data-testid='body' id='body'>
            <RoundInfo
                round={round}
                date={date}
                selectedSession={session}
                onSessionSelect={setSession}
            />
            <SessionInfo session={session} date={date} />
        </main>
    );
}
