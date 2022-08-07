import React from 'react';
import {render, screen} from '@testing-library/react';
import {SessionInfo} from './SessionInfo';
import {Session} from '../models/session';

describe('session info', () => {
    const defaultProps = {
        session: new Session('Test session', new Date('2022-01-01T12:00:00Z')),
        date: new Date('2022-01-01T11:00:00Z')
    };

    it('shows a heading', () => {
        render(<SessionInfo {...defaultProps} />);

        const element = screen.getByTestId('session-info-heading');

        expect(element).toBeInTheDocument();
    });

    it('shows the title of the session', () => {
        render(<SessionInfo {...defaultProps} />);

        const element = screen.getByTestId('session-title');

        expect(element).toHaveTextContent('Test session');
    });

    it('shows the remaining time until the session starts', () => {
        render(<SessionInfo {...defaultProps} />);

        const element = screen.getByTestId('countdown');

        expect(element).toHaveTextContent(/(((\d+ days? )?\d+ hours? )?\d+ minutes? )?\d+ seconds?/);
    });
});