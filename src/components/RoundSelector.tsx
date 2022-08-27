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
            title='Round'
        >
            {rounds.map((value, index) => (
                <option key={index} value={index}>
                    {value.title}
                </option>
            ))}
        </select>
    )
}
