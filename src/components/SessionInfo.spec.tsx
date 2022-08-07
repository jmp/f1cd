import React from 'react';
import {render, screen} from '@testing-library/react';
import {SessionInfo} from './SessionInfo';
import {aSession} from '../models/session.builder';

describe('session info', () => {
    it('shows a heading', () => {
        render(<SessionInfo session={aSession().build()} date={new Date()} />);

        const heading = screen.getByTestId('session-info-heading');

        expect(heading).toBeInTheDocument();
    });

    it('shows the title of the session', () => {
        const session = aSession().title('Hungary').build();

        render(<SessionInfo session={session} date={new Date()} />);

        const sessionTitle = screen.getByTestId('session-title');

        expect(sessionTitle).toHaveTextContent('Hungary');
    });

    it('shows the remaining time until the session starts', () => {
        render(<SessionInfo session={aSession().build()} date={new Date()} />);

        expect(screen.getByTestId('remaining-time')).toBeInTheDocument();
    });
});