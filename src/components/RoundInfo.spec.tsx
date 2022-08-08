import React from 'react';
import {render, screen} from '@testing-library/react';
import {RoundInfo} from './RoundInfo';
import {aRound} from '../models/round.builder';

describe('round info', () => {
    it('shows round title', () => {
        render(<RoundInfo round={aRound().title('Belgium').build()} date={new Date()} />);

        expect(screen.getByTestId('round-title')).toHaveTextContent('Belgium');
    });

    it('shows session info', () => {
        render(<RoundInfo round={aRound().build()} date={new Date()} />);

        expect(screen.getByTestId('session-info')).toBeInTheDocument();
    });

    it('shows session list', () => {
        render(<RoundInfo round={aRound().build()} date={new Date()} />);

        expect(screen.getByTestId('session-list')).toBeInTheDocument();
    });
});
