import {render, screen} from '@testing-library/react';
import React from 'react';
import {Countdown} from './Countdown';
import {Session} from '../models/session';

describe('countdown', () => {
    const session: Session = {
        title: 'Test session',
        date: new Date('2022-01-01T12:00:00Z')
    };

    it('shows session name', () => {
        render(<Countdown session={session} date={new Date('2022-01-01T11:00:00Z')} />);

        const element = screen.getByTestId('session');

        expect(element).toHaveTextContent('Test session');
    });

    it('shows countdown', () => {
        render(<Countdown session={session} date={new Date('2022-01-01T11:00:00Z')} />);

        const element = screen.getByTestId('countdown');

        expect(element).toHaveTextContent(/(((\d+ days? )?\d+ hours? )?\d+ minutes? )?\d+ seconds?/);
    });
});