import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {aSeason} from '../models/season.builder';

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

    it('shows round selector', () => {
        render(<App {...defaultProps} />);

        expect(screen.getByTestId('round-selector')).toBeInTheDocument();
    });

    it('shows round info', () => {
        render(<App {...defaultProps} />);

        expect(screen.getByTestId('round-info')).toBeInTheDocument();
    });

    it('updates countdown', async () => {
        const getDate = jest.fn().mockReturnValue(new Date('2000-01-01T00:00:00Z'));

        render(<App {...defaultProps} getDate={getDate} />);

        const remainingTime = screen.getByTestId('remaining-time');
        const previousContent = remainingTime.textContent;

        getDate.mockReturnValue(new Date('2000-01-01T00:00:01Z'));

        await waitFor(() => expect(remainingTime.textContent).not.toEqual(previousContent));
    });
});