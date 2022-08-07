import {Round} from '../models/round';
import {SessionList} from './SessionList';
import React from 'react';

type RoundInfoProps = {
    round: Round;
    date: Date;
};

export function RoundInfo({round, date}: RoundInfoProps) {
    return (
        <div data-testid='round-info'>
            <h2 data-testid='round-title'>{round.title}</h2>
            <SessionList round={round} date={date} />
        </div>
    );
}
