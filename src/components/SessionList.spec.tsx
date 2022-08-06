import React from 'react';
import {render, screen} from '@testing-library/react';
import {SessionList} from './SessionList';

describe('session list', () => {
    it('renders a list of sessions', () => {
        const sessions = [
            {
                title: 'First session',
                date: new Date('2022-01-01T12:00:00Z')
            },
            {
                title: 'Second session',
                date: new Date('2022-01-07T12:00:00Z')
            }
        ];
        render(<SessionList sessions={sessions} date={new Date('2022-01-01T06:00:00Z')} />);

        expect(screen.getByText('First session')).toBeInTheDocument();
        expect(screen.getByText('Second session')).toBeInTheDocument();
    });
});