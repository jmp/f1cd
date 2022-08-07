import React from 'react';
import {render, screen} from '@testing-library/react';
import {Body} from './Body';
import {aSeason} from '../models/season.builder';

describe('body', () => {
    it('shows the next round', () => {
        render(<Body season={aSeason().build()} date={new Date()} />);

        expect(screen.getByTestId('round-info')).toBeInTheDocument();
    });

    it('shows the next session', () => {
        render(<Body season={aSeason().build()} date={new Date()} />);

        expect(screen.getByTestId('session-info')).toBeInTheDocument();
    });
});
