import {Round} from '../models/round';
import {SessionList} from './SessionList';
import React from 'react';

type RoundInfoProps = {
    round: Round;
    date: Date;
};

export function RoundInfo({round, date}: RoundInfoProps) {
    return <>
        <h2 data-testid='round'>{round.title}</h2>
        <SessionList round={round} date={date} />
    </>
}
