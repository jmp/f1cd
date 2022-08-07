import React from 'react';
import {Session} from '../models/session';
import {Countdown} from '../models/countdown';

type CountdownProps = {
    session: Session;
    date: Date;
};

const countdown = new Countdown();

export function SessionInfo({session, date}: CountdownProps) {
    const remainingTime = countdown.getRemainingTime(date, session.date);
    return <>
        <h3>Next Session</h3>
        <p><span data-testid='session'>{session.title}</span> starts in <span data-testid='countdown'>{remainingTime}</span>.</p>
    </>;
}
