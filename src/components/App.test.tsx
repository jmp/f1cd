import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {Session} from '../models/session';
import {Round} from '../models/round';
import {Season} from '../models/season';

describe('App', () => {
    const season = new Season([
        new Round(
            'Test round',
            new Date('2022-01-07T12:00:00Z'),
            [
                new Session('First session', new Date('2022-01-01T12:00:00Z')),
                new Session('Second session', new Date('2022-01-07T12:00:00Z')),
                new Session('Third session', new Date('2022-01-14T12:00:00Z'))
            ]
        )
    ]);

    it('updates countdown', async () => {
        const mockGetDate = jest.fn().mockReturnValue(new Date('2022-01-06T09:56:56Z'));

        render(<App season={season} getDate={mockGetDate} updateInterval={0} />);

        const element = screen.getByTestId('countdown');
        const previousContent = element.textContent!;

        mockGetDate.mockReturnValue(new Date('2022-01-06T09:56:57Z'));

        await waitFor(() => {
            expect(element).not.toHaveTextContent(previousContent);
        });
    });
});