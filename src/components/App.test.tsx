import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {aSeason} from '../models/season.builder';
import {Season} from '../models/season';
import {Clock} from '../models/clock';

describe('app', () => {
    let defaultProps: {
        season: Season;
        clock: Clock;
    };

    beforeEach(() => {
       defaultProps = {
           season: aSeason().build(),
           clock: { getDate: jest.fn().mockReturnValue(new Date()) }
       };
    });

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
});