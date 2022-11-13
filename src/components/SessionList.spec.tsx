import React from 'react';
import {render, screen} from '@testing-library/react';
import {SessionList} from './SessionList';
import {aSession} from '../models/session.builder';
import {aRound, aRoundWithTwoSessions} from '../models/round.builder';

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

        expect(screen.getByTestId('session-list-heading')).toBeInTheDocument();
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

        expect(timezoneInfo).toHaveTextContent(/All times are UTC[+-]\d+/);
    });

    it('calls the selection handler when selecting a list item', () => {
        const onSessionSelect = jest.fn();
        const round = aRound()
            .session(aSession().title('Select me!'))
            .build();

        render(
            <SessionList
                round={round}
                date={new Date()}
                session={round.sessions[0]}
                setSession={onSessionSelect}
            />
        );

        screen.getByText('Select me!').click();

        expect(onSessionSelect).toHaveBeenCalledWith(
            aSession().title('Select me!').build()
        );
    });
});