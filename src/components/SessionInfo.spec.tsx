import React from 'react';
import {render, screen} from '@testing-library/react';
import {SessionInfo} from './SessionInfo';
import {Session} from '../models/session';

describe('session info', () => {
    const session = new Session('Test session', new Date('2022-01-01T12:00:00Z'));

    it('shows session name', () => {
        render(<SessionInfo session={session} date={new Date('2022-01-01T11:00:00Z')} />);

        const element = screen.getByTestId('session-title');

        expect(element).toHaveTextContent('Test session');
    });

    it('shows countdown', () => {
        render(<SessionInfo session={session} date={new Date('2022-01-01T11:00:00Z')} />);

        const element = screen.getByTestId('countdown');

        expect(element).toHaveTextContent(/(((\d+ days? )?\d+ hours? )?\d+ minutes? )?\d+ seconds?/);
    });
});