import React from 'react';
import {render, screen} from '@testing-library/react';
import {SessionList} from './SessionList';
import {aSession} from '../models/session.builder';
import {aRound, aRoundWithTwoSessions} from '../models/round.builder';
import {Session} from '../models/session';

describe('session list', () => {
    it('shows a heading', () => {
        const round = aRound().build();

        render(
            <SessionList
                round={round}
                date={new Date()}
                session={round.sessions[0]}
                setSession={jest.fn()}
            />
        );

        expect(screen.getByTestId('session-list-heading')).not.toBeNull();
    });

    it('shows each session in the round', () => {
        const round = aRoundWithTwoSessions().build();

        render(
            <SessionList
                round={round}
                date={new Date()}
                session={round.sessions[0]}
                setSession={jest.fn()}
            />
        );

        expect(screen.getAllByTestId('session-list-item')).toHaveLength(2);
    });

    it('shows the timezone', () => {
        render(
            <SessionList
                round={aRound().build()}
                date={new Date()}
                session={aSession().build()}
                setSession={jest.fn()}
            />
        );

        const timezoneInfo = screen.getByTestId('session-list-timezone');

        expect(timezoneInfo.textContent).toMatch(/All times are UTC[+-]\d+/);
    });

    it('calls the selection handler when selecting a list item', () => {
        const round = aRound().build();
        const setSession = jest.fn();

        render(
            <SessionList
                round={round}
                date={new Date()}
                session={round.sessions[0]}
                setSession={setSession}
            />
        );

        screen.getByTestId('session-list-item').click();

        expect(setSession).toHaveBeenCalledWith(expect.any(Session));
    });
});