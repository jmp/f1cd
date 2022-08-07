import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {Session} from '../models/session';
import {Round} from '../models/round';
import {Season} from '../models/season';

describe('app', () => {
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
        const mockGetDate = jest.fn().mockReturnValue(new Date('2022-01-06T09:56:56Z'));

        render(<App {...defaultProps} getDate={mockGetDate} />);

        const remainingTime = screen.getByTestId('remaining-time');
        const previousContent = remainingTime.textContent!;

        mockGetDate.mockReturnValue(new Date('2022-01-06T09:56:57Z'));

        await waitFor(() => {
            expect(remainingTime).not.toHaveTextContent(previousContent);
        });
    });
});