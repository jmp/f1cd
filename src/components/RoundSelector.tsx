import React from 'react';
import {Round} from '../models/round';

type RoundSelectorProps = {
    rounds: Round[];
    defaultRound: Round;
    onSelect: (round: Round) => void;
};

export function RoundSelector({rounds, defaultRound, onSelect}: RoundSelectorProps) {
    return (
        <select
            data-testid='round-selector'
            onChange={event => onSelect(rounds[event.target.value as unknown as number])}
            value={rounds.indexOf(defaultRound)}
            aria-label='Round'
        >
            {rounds.map(({title}, index) => (
                <option key={index} value={index}>
                    {title}
                </option>
            ))}
        </select>
    )
}
