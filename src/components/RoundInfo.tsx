import {Round} from '../models/round';
import {SessionList} from './SessionList';
import React from 'react';
import {Session} from '../models/session';

type RoundInfoProps = {
    round: Round;
    date: Date;
    selectedSession: Session;
    onSessionSelect: (session: Session) => void;
};

export function RoundInfo({round, date, selectedSession, onSessionSelect}: RoundInfoProps) {
    return (
        <div data-testid='round-info'>
            <h2 data-testid='round-title'>{round.title}</h2>
            <SessionList
                round={round}
                date={date}
                selectedSession={selectedSession}
                onSessionSelect={onSessionSelect}
            />
        </div>
    );
}
