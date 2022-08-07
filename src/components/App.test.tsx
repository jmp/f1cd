import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {aRound} from '../models/round.builder';
import {aSeason} from '../models/season.builder';
import {aSession} from '../models/session.builder';

describe('app', () => {
    const defaultProps = {
        season: aSeason().build(),
        getDate: () => new Date(),
        updateInterval: 0
    };

    it('shows a header', () => {
        render(<App {...defaultProps} />);

        expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('shows a body', () => {
        render(<App {...defaultProps} />);

        expect(screen.getByTestId('body')).toBeInTheDocument();
    })

    it('shows a footer', () => {
        render(<App {...defaultProps} />);

        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('updates countdown', async () => {
        const season = aSeason()
            .round(aRound().session(aSession().date(new Date('2022-01-07T00:00:00Z'))))
            .build();
        const mockGetDate = jest.fn().mockReturnValue(new Date('2022-01-06T09:56:56Z'));

        render(<App {...defaultProps} season={season} getDate={mockGetDate} />);

        const remainingTime = screen.getByTestId('remaining-time');
        const previousContent = remainingTime.textContent!;

        mockGetDate.mockReturnValue(new Date('2022-01-06T09:56:57Z'));

        await waitFor(() => {
            expect(remainingTime).not.toHaveTextContent(previousContent);
        });
    });
});