import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {RoundInfo} from './RoundInfo';
import {aRound} from '../models/round.builder';
import {Clock} from '../models/clock';

describe('round info', () => {
    it('shows session info', () => {
        render(<RoundInfo round={aRound().build()} clock={new Clock()} updateInterval={0} />);

        expect(screen.getByTestId('session-info')).not.toBeNull();
    });

    it('shows session list', () => {
        render(<RoundInfo round={aRound().build()} clock={new Clock()} updateInterval={0} />);

        expect(screen.getByTestId('session-list')).not.toBeNull();
    });

    it('updates countdown', async () => {
        const clock = {
            getDate: jest.fn().mockReturnValue(new Date('2000-01-01T00:00:00Z'))
        };

        render(<RoundInfo round={aRound().build()} clock={clock} updateInterval={0} />);

        const remainingTime = screen.getByTestId('remaining-time');
        const previousContent = remainingTime.textContent;

        clock.getDate.mockReturnValue(new Date('2000-01-01T00:00:01Z'));

        await waitFor(() => expect(remainingTime.textContent).not.toEqual(previousContent));
    });
});
