import React from 'react';
import {render, screen} from '@testing-library/react';
import {Body} from './Body';
import {Season} from '../models/season';
import {Round} from '../models/round';
import {Session} from '../models/session';

describe('body', () => {
    const defaultProps = {
        season: new Season([
            new Round(
                'Test round',
                new Date('2022-01-01T12:00:00Z'),
                [new Session('Test session', new Date('2022-01-07T12:00:00Z'))]
            )
        ]),
        date: new Date('2022-01-01T11:00:00Z')
    }

    it('shows the next round', () => {
        render(<Body {...defaultProps} />);

        const roundInfo = screen.getByTestId('round-info');

        expect(roundInfo).toBeInTheDocument();
    });

    it('shows the next session', () => {
        render(<Body {...defaultProps} />);

        const sessionInfo = screen.getByTestId('session-info');

        expect(sessionInfo).toBeInTheDocument();
    });
});
