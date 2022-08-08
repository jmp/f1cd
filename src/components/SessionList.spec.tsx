import React from 'react';
import {render, screen} from '@testing-library/react';
import {SessionList} from './SessionList';
import {aSession} from '../models/session.builder';
import {aRound} from '../models/round.builder';

describe('session list', () => {
    it('shows a heading', () => {
        render(
            <SessionList
                round={aRound().build()}
                date={new Date()}
                session={aSession().build()}
                setSession={jest.fn()}
            />
        );

        expect(screen.getByTestId('session-list-heading')).toBeInTheDocument();
    });

    it('shows each session in the round', () => {
        const round = aRound()
            .session(aSession().title('Session 1').date(new Date('2022-01-01Z')))
            .session(aSession().title('Session 2').date(new Date('2022-01-07Z')))
            .build();

        render(
            <SessionList
                round={round}
                date={new Date()}
                session={aSession().build()}
                setSession={jest.fn()}
            />
        );

        expect(screen.getByText('Session 1')).toBeInTheDocument();
        expect(screen.getByText('Session 2')).toBeInTheDocument();
    });

    it('shows info about the timezone', () => {
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

        render(
            <SessionList
                round={aRound().session(aSession().title('Select me!')).build()}
                date={new Date()}
                session={aSession().build()}
                setSession={onSessionSelect}
            />
        );

        screen.getByText('Select me!').click();

        expect(onSessionSelect).toHaveBeenCalledWith(
            aSession().title('Select me!').build()
        );
    });
});