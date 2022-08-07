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
    return (
        <div data-testid='session-info'>
            <h3 data-testid='session-info-heading'>Next Session</h3>
            <p><span data-testid='session-title'>{session.title}</span> starts in <span data-testid='countdown'>{remainingTime}</span>.</p>
        </div>
    );
}
