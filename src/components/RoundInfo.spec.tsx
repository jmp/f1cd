import React from 'react';
import {render, screen} from '@testing-library/react';
import {RoundInfo} from './RoundInfo';
import {aRound} from '../models/round.builder';

describe('round info', () => {
    it('shows the name of the round', () => {
        render(<RoundInfo round={aRound().title('Belgium').build()} date={new Date()} />);

        expect(screen.getByTestId('round-title')).toHaveTextContent('Belgium');
    });

    it('shows a list of sessions', () => {
        render(<RoundInfo round={aRound().build()} date={new Date()} />);

        expect(screen.getByTestId('session-list')).toBeInTheDocument();
    });
});