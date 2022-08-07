import React from 'react';
import {render, screen} from '@testing-library/react';
import {SessionList} from './SessionList';
import {Session} from '../models/session';
import {Round} from '../models/round';

describe('session list', () => {
    const defaultProps = {
        round: new Round(
            'Test round',
            new Date('2022-01-01T12:00:00Z'),
            [
                new Session('First session', new Date('2022-01-01T12:00:00Z')),
                new Session('Second session', new Date('2022-01-07T12:00:00Z'))
            ]
        ),
        date: new Date('2022-01-01T06:00:00Z')
    };

    it('shows a heading', () => {
        render(<SessionList {...defaultProps} />);

        const heading = screen.getByTestId('session-list-heading');

        expect(heading).toBeInTheDocument();
    });

    it('shows each session in the round', () => {
        render(<SessionList {...defaultProps} />);

        expect(screen.getByText('First session')).toBeInTheDocument();
        expect(screen.getByText('Second session')).toBeInTheDocument();
    });

    it('shows info about the timezone', () => {
        render(<SessionList {...defaultProps} />);

        const timezoneInfo = screen.getByTestId('session-list-tzinfo');

        expect(timezoneInfo).toHaveTextContent(/All times are UTC[+-]\d+/);
    });
});