import React from 'react';
import {Session} from '../models/session';

type CountdownProps = {
    session: Session;
    date: Date;
};

export function SessionInfo({session, date}: CountdownProps) {
    const remainingTime = session.getRemainingTime(date);
    return (
        <div data-testid='session-info'>
            <h3 data-testid='session-info-heading'>Next Session</h3>
            <p><span data-testid='session-title'>{session.title}</span> starts in <span data-testid='countdown'>{remainingTime}</span>.</p>
        </div>
    );
}
