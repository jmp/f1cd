import React from 'react';
import {Session} from '../models/session';
import {GetRemainingTime} from '../use-cases/get-remaining-time';

type CountdownProps = {
    session: Session;
    date: Date;
};

const getRemainingTime = new GetRemainingTime();

export function Countdown({session, date}: CountdownProps) {
    const remainingTime = getRemainingTime.getRemainingTime(date, session.date);
    return <>
        <h3>Next Session</h3>
        <p><span data-testid='session'>{session.title}</span> starts in <span data-testid='countdown'>{remainingTime}</span>.</p>
    </>;
}
