import React from 'react';
import {render, screen} from '@testing-library/react';
import {Body} from './Body';
import {aSeason} from '../models/season.builder';

describe('body', () => {
    it('shows session info', () => {
        render(<Body season={aSeason().build()} date={new Date()} />);

        expect(screen.getByTestId('session-info')).toBeInTheDocument();
    });

    it('shows session list', () => {
        render(<Body season={aSeason().build()} date={new Date()} />);

        expect(screen.getByTestId('session-list')).toBeInTheDocument();
    });
});
