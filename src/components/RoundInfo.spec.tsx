import React from 'react';
import {render, screen} from '@testing-library/react';
import {RoundInfo} from './RoundInfo';
import {Round} from '../models/round';

describe('round info', () => {
    const round: Round = {
        title: 'Test round',
        startDate: new Date('2022-01-07T12:00:00Z'),
        sessions: [{
            title: 'First session',
            date: new Date('2022-01-01T12:00:00Z')
        }, {
            title: 'Second session',
            date: new Date('2022-01-07T12:00:00Z')
        }, {
            title: 'Third session',
            date: new Date('2022-01-14T12:00:00Z')
        }]
    };

    it('shows round name', () => {
        render(<RoundInfo round={round} date={new Date()} />);

        const element = screen.getByTestId('round');

        expect(element).toHaveTextContent('Test round');
    });

    it('shows session list', () => {
        render(<RoundInfo round={round} date={new Date()} />);

        const element = screen.getByTestId('sessions');

        expect(element).toBeInTheDocument();
    });
});