import React from 'react';
import {render, screen} from '@testing-library/react';
import {RoundInfo} from './RoundInfo';
import {Round} from '../models/round';
import {Session} from '../models/session';

describe('round info', () => {
    const round = new Round(
        'Test round',
        new Date('2022-01-07T12:00:00Z'),
        [
            new Session('First session', new Date('2022-01-01T12:00:00Z')),
            new Session('Second session', new Date('2022-01-07T12:00:00Z')),
            new Session('Third session', new Date('2022-01-14T12:00:00Z'))
        ]
    );

    it('shows the name of the round', () => {
        render(<RoundInfo round={round} date={new Date()} />);

        const element = screen.getByTestId('round-title');

        expect(element).toHaveTextContent('Test round');
    });

    it('shows a list of sessions', () => {
        render(<RoundInfo round={round} date={new Date()} />);

        const element = screen.getByTestId('session-list');

        expect(element).toBeInTheDocument();
    });
});