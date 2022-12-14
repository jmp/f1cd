import {fireEvent, render, screen} from '@testing-library/react';
import {aRound} from '../models/round.builder';
import React from 'react';
import {RoundSelector} from './RoundSelector';

describe('round selector', () => {
    it('has the default round selected by default', () => {
        const round1 = aRound().title('Some round').build();
        const round2 = aRound().title('Default round').build();

        render(<RoundSelector rounds={[round1, round2]} defaultRound={round2} onSelect={jest.fn()} />);

        const roundSelector = screen.getByTestId('round-selector') as HTMLSelectElement;
        const selectedOption = roundSelector.options[roundSelector.selectedIndex];

        expect(selectedOption.text).toEqual('Default round');
    });

    it('handles the selected round', async () => {
        const round1 = aRound().title('Some round').build();
        const round2 = aRound().title('Select me!').build();
        const onSelect = jest.fn();

        render(<RoundSelector rounds={[round1, round2]} defaultRound={round1} onSelect={onSelect} />);

        fireEvent.change(screen.getByTestId('round-selector'), { target: { value: 1 } });

        expect(onSelect).toHaveBeenCalledWith(aRound().title('Select me!').build());
    });
});