import React from 'react';
import {render, screen} from '@testing-library/react';
import {RoundInfo} from './RoundInfo';
import {aRound} from '../models/round.builder';
import {aSession} from '../models/session.builder';

describe('round info', () => {
    it('shows the name of the round', () => {
        render(
            <RoundInfo
                round={aRound().title('Belgium').build()}
                date={new Date()}
                selectedSession={aSession().build()}
                onSessionSelect={jest.fn()}
            />
        );

        expect(screen.getByTestId('round-title')).toHaveTextContent('Belgium');
    });

    it('shows a list of sessions', () => {
        render(
            <RoundInfo
                round={aRound().build()}
                date={new Date()}
                selectedSession={aSession().build()}
                onSessionSelect={jest.fn()}
            />
        );

        expect(screen.getByTestId('session-list')).toBeInTheDocument();
    });
});