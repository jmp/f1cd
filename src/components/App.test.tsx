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

        const header = screen.getByTestId('header');

        expect(header).toBeInTheDocument();
    });

    it('shows a body', () => {
        render(<App {...defaultProps} />);

        const body = screen.getByTestId('body');

        expect(body).toBeInTheDocument();
    })

    it('shows a footer', () => {
        render(<App {...defaultProps} />);

        const sessionInfo = screen.getByTestId('footer');

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