import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {Session} from '../models/session';
import {Round} from '../models/round';
import {Season} from '../models/season';

describe('App', () => {
    const defaultProps = {
        season: new Season([
            new Round(
                'Test round',
                new Date('2022-01-01T12:00:00Z'),
                [new Session('Test session', new Date('2022-01-07T12:00:00Z'))]
            )
        ]),
        getDate: () => new Date(),
        updateInterval: 0
    };

    it('shows header', () => {
        render(<App {...defaultProps} />);

        const header = screen.getByTestId('header');

        expect(header).toBeInTheDocument();
    });

    it('shows round info', () => {
        render(<App {...defaultProps} />);

        const roundInfo = screen.getByTestId('round-info');

        expect(roundInfo).toBeInTheDocument();
    })

    it('shows session info', () => {
        render(<App {...defaultProps} />);

        const sessionInfo = screen.getByTestId('session-info');

        expect(sessionInfo).toBeInTheDocument();
    });

    it('updates countdown', async () => {
        const mockGetDate = jest.fn().mockReturnValue(new Date('2022-01-06T09:56:56Z'));

        render(<App {...defaultProps} getDate={mockGetDate} />);

        const element = screen.getByTestId('countdown');
        const previousContent = element.textContent!;

        mockGetDate.mockReturnValue(new Date('2022-01-06T09:56:57Z'));

        await waitFor(() => {
            expect(element).not.toHaveTextContent(previousContent);
        });
    });
});